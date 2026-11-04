import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { z } from "zod";

import { typeSafeObjectFromEntries } from "../utils/helpers";

import {
  type Bird as Ambassador,
  birdSchema as apiAmbassadorSchema,
  birds as fallbackAmbassadors,
} from "../data/birds";

// Use transform here so we parse each ambassador individually
const apiSchema = z.object({
  v1: z
    .record(
      z.string(),
      // Use nullable here as the fallback for when we fail to parse an ambassador
      apiAmbassadorSchema.nullable().catch((ctx) => {
        console.error(
          "Failed to parse ambassador",
          ctx.value,
          z.prettifyError(ctx.error),
        );
        return null;
      }),
    )
    .transform((val) =>
      // Filter out any null values that failed to parse
      typeSafeObjectFromEntries(
        Object.entries(val).filter(
          (entry): entry is [string, Ambassador] => !!entry[1],
        ),
      ),
    )
    // Ensure we didn't fail to parse all ambassadors
    .refine((val) => Object.keys(val).length > 0, {
      message: "No ambassadors found",
    }),
});

const fetchAmbassadors = async (): Promise<Record<string, Ambassador>> => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL?.replace(/\/+$/, "");
  if (!apiBaseUrl)
    throw new Error("REACT_APP_API_BASE_URL environment variable is not set");

  const response = await fetch(`${apiBaseUrl}/static/birds.json`);
  if (!response.ok)
    throw new Error(
      `Failed to fetch ambassadors: ${response.status} ${response.statusText} ${await response.text()}`,
    );

  const data = await response.json();
  return apiSchema.parse(data).v1;
};

// Use a context to fetch the ambassadors from the API
const Context = createContext<{
  ambassadors: Record<string, Ambassador> | null;
  refresh: () => void;
} | null>(null);

export const AmbassadorsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ambassadors, setAmbassadors] = useState<Record<
    string,
    Ambassador
  > | null>(null);

  // On mount, attempt to fetch the ambassadors from the API
  // If we can't fetch the ambassadors, use the data from the data package
  useEffect(() => {
    fetchAmbassadors()
      .catch((err) => {
        console.error(err);
        return fallbackAmbassadors;
      })
      .then(setAmbassadors);
  }, []);

  // Refresh the current ambassadors after a !refresh command
  const refresh = useCallback(() => {
    fetchAmbassadors()
      .then(setAmbassadors)
      .catch((err) => console.error(err));
  }, []);

  // Every 2 hours, attempt to fetch the ambassadors from the API
  // If we can't fetch the ambassadors, we'll just use the existing data
  useEffect(() => {
    const interval = setInterval(
      () => {
        fetchAmbassadors()
          .then(setAmbassadors)
          .catch((err) => console.error(err));
      },
      2 * 60 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Context.Provider value={{ ambassadors, refresh }}>
      {children}
    </Context.Provider>
  );
};

export const useAmbassadors = (): Record<string, Ambassador> | null => {
  const context = useContext(Context);
  return context?.ambassadors ?? null;
};

export const useAmbassador = (key: string) => {
  const ambassadors = useAmbassadors();
  return ambassadors?.[key];
};

export const useAmbassadorsRefresh = () => {
  const context = useContext(Context);
  return context?.refresh;
};
