import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";

interface HelperProps extends ComponentProps {
  children?: NullstackNode;
}

function Helper(props: NullstackClientContext<HelperProps>) {
  const { children, class: klass, customTheme, useTheme } = props;
  const classes = useTheme(customTheme).helper;
  return <p class={[classes.base, klass]}>{children}</p>;
}

export default Helper as NullstackFunctionalComponent<HelperProps>;
