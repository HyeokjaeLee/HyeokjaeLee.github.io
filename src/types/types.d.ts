declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
declare module "*.ico";
declare module "*.gif";

type Display = "hide" | "";
type SetDisplay = Dispatch<SetStateAction<"hide" | "">>;