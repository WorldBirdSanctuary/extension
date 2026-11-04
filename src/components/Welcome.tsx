import IconAmazon from "./icons/IconAmazon";
import IconFacebook from "./icons/IconFacebook";
import IconGitHub from "./icons/IconGitHub";
import IconGlobe from "./icons/IconGlobe";
import IconInstagram from "./icons/IconInstagram";
import IconTikTok from "./icons/IconTikTok";

import Card from "./Card";

const socialClass =
  "transition-[color,transform,scale] hover:scale-125 focus:scale-125 hover:text-highlight focus:text-highlight";

interface WelcomeProps {
  className?: string;
}

export default function Welcome(props: WelcomeProps) {
  const { className } = props;

  return (
    <Card className={className} title="Welcome to World Bird Sanctuary">
      <p className="mt-2 mb-4">
        Nestled on 305 acres of serene Missouri hardwood forest, World Bird
        Sanctuary is a destination for nature enthusiasts. We protect and
        preserve birds and their habitats through conservation, rehabilitation,
        and education.
      </p>

      <ul className="mb-2 flex flex-wrap items-center justify-center gap-4">
        <li className={socialClass}>
          <a
            href="https://www.worldbirdsanctuary.org"
            rel="noreferrer"
            target="_blank"
            title="Website"
          >
            <IconGlobe size={32} />
          </a>
        </li>
        <li className={socialClass}>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/2X3ZNQ38V41RE"
            rel="noreferrer"
            target="_blank"
            title="Amazon Wishlist"
          >
            <IconAmazon size={32} />
          </a>
        </li>
        <li className={socialClass}>
          <a
            href="https://www.instagram.com/worldbirdsanctuary"
            rel="noreferrer"
            target="_blank"
            title="Instagram"
          >
            <IconInstagram size={32} />
          </a>
        </li>
        <li className={socialClass}>
          <a
            href="https://www.tiktok.com/@worldbirdstl"
            rel="noreferrer"
            target="_blank"
            title="TikTok"
          >
            <IconTikTok size={32} />
          </a>
        </li>
        <li className={socialClass}>
          <a
            href="https://www.facebook.com/WorldBirdSanctuary"
            rel="noreferrer"
            target="_blank"
            title="Facebook"
          >
            <IconFacebook size={32} />
          </a>
        </li>
      </ul>

      <a
        className="flex w-fit items-center justify-center gap-1 text-xs transition-colors hover:text-highlight focus:text-highlight"
        href="https://github.com/worldbirdsanctuary/extension"
        rel="noreferrer"
        target="_blank"
      >
        Contribute on GitHub
        <IconGitHub size={16} />
      </a>
    </Card>
  );
}
