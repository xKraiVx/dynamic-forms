const BUTTON_BASIC_STYLES =
  "relative px-6 py-3 rounded-xl bg-(--COLOR-BUTTON-BG) text-(--COLOR-BUTTON-TEXT) shadow-custom-purple cursor-pointer flex justify-center items-center gap-2 transition duration-300 ease-in-out active:before:opacity-100 active:text-white";

const BUTTON_ACTIVE_STYLES = "active:before:opacity-100 active:text-white";

const BUTTON_HOVER_STYLES =
  "hover:before:opacity-100 hover:text-white hover:shadow-lg";

const BUTTON_FOCUS_STYLES =
  "focus:before:opacity-100 focus:text-white focus:shadow-lg";

const BUTTON_BEFORE_STYLES =
  "before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-(--COLOR-FIRST-BUTTON-GRADIENT) before:from-0% before:via-(--COLOR-SECOND-BUTTON-GRADIENT) before:via-15% before:to-(--COLOR-THIRD-BUTTON-GRADIENT) before:via-25% before:to-(--COLOR-FOURTH-BUTTON-GRADIENT) before:to-75% before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:rounded-xl";

export const BUTTON_STYLES = [
  BUTTON_BASIC_STYLES,
  BUTTON_BEFORE_STYLES,
  BUTTON_ACTIVE_STYLES,
  BUTTON_HOVER_STYLES,
  BUTTON_FOCUS_STYLES,
].join(" ");

export const BUTTON_CONTENT_STYLES = "relative z-1";

export const BUTTON_DISABLED_STYLES = "opacity-50 pointer-events-none";
