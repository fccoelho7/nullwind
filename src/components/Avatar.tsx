import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { IconUser } from "nullstack-feather-icons";

import type { ComponentProps } from "../types";

interface AvatarProps extends ComponentProps {
  description?: string;
  name?: string;
  src?: string;
}

function Avatar(props: NullstackClientContext<AvatarProps>) {
  const { class: klass, customTheme, description, id, name, src, useTheme } = props;
  const classes = useTheme(customTheme).avatar;

  return (
    <div id={id} class={[classes.base, klass]}>
      <div class={classes.imageWrapper}>
        {(src && <img class={classes.image} src={src} alt={name} />) || (
          <div class={classes.imageFallback}>
            <IconUser size={20} />
          </div>
        )}
      </div>
      <div>
        <div class={classes.name}>{name}</div>
        <div class={classes.description}>{description}</div>
      </div>
    </div>
  );
}

export default Avatar as NullstackFunctionalComponent<AvatarProps>;
