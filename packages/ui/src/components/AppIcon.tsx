import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";
import Add01Icon from "@hugeicons/core-free-icons/Add01Icon";
import Alert02Icon from "@hugeicons/core-free-icons/Alert02Icon";
import AlertCircleIcon from "@hugeicons/core-free-icons/AlertCircleIcon";
import ArrowDown02Icon from "@hugeicons/core-free-icons/ArrowDown02Icon";
import ArrowLeft02Icon from "@hugeicons/core-free-icons/ArrowLeft02Icon";
import ArrowRight02Icon from "@hugeicons/core-free-icons/ArrowRight02Icon";
import ArrowUp02Icon from "@hugeicons/core-free-icons/ArrowUp02Icon";
import Bug01Icon from "@hugeicons/core-free-icons/Bug01Icon";
import CheckIcon from "@hugeicons/core-free-icons/CheckIcon";
import CheckmarkCircle02Icon from "@hugeicons/core-free-icons/CheckmarkCircle02Icon";
import Clock01Icon from "@hugeicons/core-free-icons/Clock01Icon";
import CodeFolderIcon from "@hugeicons/core-free-icons/CodeFolderIcon";
import CodeIcon from "@hugeicons/core-free-icons/CodeIcon";
import Copy01Icon from "@hugeicons/core-free-icons/Copy01Icon";
import CpuIcon from "@hugeicons/core-free-icons/CpuIcon";
import Delete02Icon from "@hugeicons/core-free-icons/Delete02Icon";
import Download01Icon from "@hugeicons/core-free-icons/Download01Icon";
import ExternalLinkIcon from "@hugeicons/core-free-icons/ExternalLinkIcon";
import EyeIcon from "@hugeicons/core-free-icons/EyeIcon";
import FlashIcon from "@hugeicons/core-free-icons/FlashIcon";
import FullscreenIcon from "@hugeicons/core-free-icons/FullscreenIcon";
import GameController03Icon from "@hugeicons/core-free-icons/GameController03Icon";
import GithubIcon from "@hugeicons/core-free-icons/GithubIcon";
import Globe02Icon from "@hugeicons/core-free-icons/Globe02Icon";
import GoogleIcon from "@hugeicons/core-free-icons/GoogleIcon";
import InformationCircleIcon from "@hugeicons/core-free-icons/InformationCircleIcon";
import Layers01Icon from "@hugeicons/core-free-icons/Layers01Icon";
import Linkedin02Icon from "@hugeicons/core-free-icons/Linkedin02Icon";
import Logout01Icon from "@hugeicons/core-free-icons/Logout01Icon";
import MedalFirstPlaceIcon from "@hugeicons/core-free-icons/MedalFirstPlaceIcon";
import MediumIcon from "@hugeicons/core-free-icons/MediumIcon";
import Moon02Icon from "@hugeicons/core-free-icons/Moon02Icon";
import NewTwitterIcon from "@hugeicons/core-free-icons/NewTwitterIcon";
import PauseIcon from "@hugeicons/core-free-icons/PauseIcon";
import PlayIcon from "@hugeicons/core-free-icons/PlayIcon";
import QrCodeIcon from "@hugeicons/core-free-icons/QrCodeIcon";
import Refresh01Icon from "@hugeicons/core-free-icons/Refresh01Icon";
import ShieldCheckIcon from "@hugeicons/core-free-icons/ShieldCheckIcon";
import SparklesIcon from "@hugeicons/core-free-icons/SparklesIcon";
import StopIcon from "@hugeicons/core-free-icons/StopIcon";
import Sun03Icon from "@hugeicons/core-free-icons/Sun03Icon";
import Target02Icon from "@hugeicons/core-free-icons/Target02Icon";
import Timer02Icon from "@hugeicons/core-free-icons/Timer02Icon";
import TrophyIcon from "@hugeicons/core-free-icons/TrophyIcon";
import UserMultiple02Icon from "@hugeicons/core-free-icons/UserMultiple02Icon";
import YoutubeIcon from "@hugeicons/core-free-icons/YoutubeIcon";

export const APP_ICONS = {
  code: CodeIcon,
  layers: Layers01Icon,
  globe: Globe02Icon,
  google: GoogleIcon,
  play: PlayIcon,
  pause: PauseIcon,
  stop: StopIcon,
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
  arrowUp: ArrowUp02Icon,
  arrowDown: ArrowDown02Icon,
  game: GameController03Icon,
  trophy: TrophyIcon,
  medal: MedalFirstPlaceIcon,
  qr: QrCodeIcon,
  flash: FlashIcon,
  bug: Bug01Icon,
  target: Target02Icon,
  timer: Timer02Icon,
  cpu: CpuIcon,
  shield: ShieldCheckIcon,
  logout: Logout01Icon,
  add: Add01Icon,
  trash: Delete02Icon,
  download: Download01Icon,
  refresh: Refresh01Icon,
  external: ExternalLinkIcon,
  eye: EyeIcon,
  sparkles: SparklesIcon,
  fullscreen: FullscreenIcon,
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
