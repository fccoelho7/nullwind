import { NullstackNode } from "nullstack";

import theme from "./theme";

export type Theme = typeof theme;
export type UseTheme = (customComponentTheme: Theme[keyof Theme]) => Theme;
export interface ComponentProps {
  id?: string;
  class?: string;
  children?: NullstackNode;
  theme: Theme;
  useTheme: UseTheme;
  customTheme?: Theme[keyof Theme];
}
