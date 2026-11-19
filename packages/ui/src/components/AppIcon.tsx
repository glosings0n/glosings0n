import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";
import Alert02Icon from "@hugeicons/core-free-icons/Alert02Icon";
import AlertCircleIcon from "@hugeicons/core-free-icons/AlertCircleIcon";
import ArrowLeft02Icon from "@hugeicons/core-free-icons/ArrowLeft02Icon";
import ArrowRight02Icon from "@hugeicons/core-free-icons/ArrowRight02Icon";
import CheckIcon from "@hugeicons/core-free-icons/CheckIcon";
import CheckmarkCircle02Icon from "@hugeicons/core-free-icons/CheckmarkCircle02Icon";
import Clock01Icon from "@hugeicons/core-free-icons/Clock01Icon";
import CodeFolderIcon from "@hugeicons/core-free-icons/CodeFolderIcon";
import CodeIcon from "@hugeicons/core-free-icons/CodeIcon";
import Copy01Icon from "@hugeicons/core-free-icons/Copy01Icon";
import GithubIcon from "@hugeicons/core-free-icons/GithubIcon";
import Globe02Icon from "@hugeicons/core-free-icons/Globe02Icon";
import GoogleIcon from "@hugeicons/core-free-icons/GoogleIcon";
import InformationCircleIcon from "@hugeicons/core-free-icons/InformationCircleIcon";
import Layers01Icon from "@hugeicons/core-free-icons/Layers01Icon";
import Linkedin02Icon from "@hugeicons/core-free-icons/Linkedin02Icon";
import MediumIcon from "@hugeicons/core-free-icons/MediumIcon";
import Moon02Icon from "@hugeicons/core-free-icons/Moon02Icon";
import NewTwitterIcon from "@hugeicons/core-free-icons/NewTwitterIcon";
import PlayIcon from "@hugeicons/core-free-icons/PlayIcon";
import Sun03Icon from "@hugeicons/core-free-icons/Sun03Icon";
import UserMultiple02Icon from "@hugeicons/core-free-icons/UserMultiple02Icon";
import YoutubeIcon from "@hugeicons/core-free-icons/YoutubeIcon";

export const APP_ICONS = {
  code: CodeIcon,
  layers: Layers01Icon,
  globe: Globe02Icon,
  google: GoogleIcon,
  play: PlayIcon,
  medium: MediumIcon,
  youtube: YoutubeIcon,
  codeFolder: CodeFolderIcon,
  github: GithubIcon,
  linkedin: Linkedin02Icon,
  twitter: NewTwitterIcon,
  clock: Clock01Icon,
  sun: Sun03Icon,
  moon: Moon02Icon,
  copy: Copy01Icon,
  check: CheckIcon,
  info: InformationCircleIcon,
  success: CheckmarkCircle02Icon,
  warning: Alert02Icon,
  danger: AlertCircleIcon,
  users: UserMultiple02Icon,
  arrowLeft: ArrowLeft02Icon,
  arrowRight: ArrowRight02Icon,
} as const;

export type AppIconName = keyof typeof APP_ICONS;

interface AppIconProps extends Omit<HugeiconsIconProps, "icon"> {
  name: AppIconName;
}

export function AppIcon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = "currentColor",
  ...rest
}: AppIconProps) {
  return (
    <HugeiconsIcon
      icon={APP_ICONS[name]}
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      {...rest}
    />
  );
}

export { HugeiconsIcon };
