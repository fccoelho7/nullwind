import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { IconUser } from "nullstack-feather-icons";

import theme from "~/theme";

interface AvatarProps {
  id?: string;
  src?: string;
  name?: string;
  description?: string;
}

function Avatar(props: NullstackClientContext<AvatarProps>) {
  const { id, src, name, description } = props;
  const classes = theme.avatar;

  return (
    <div id={id} class={classes.base}>
      <div class="h-10 w-10">
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
