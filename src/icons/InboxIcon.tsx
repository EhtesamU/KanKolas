import * as React from "react";
import Svg, { SvgProps,  Path } from "react-native-svg";

const Inbox = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 18 18" {...props}>
      <Path d="M-3-3h24v24H-3z" />
      <Path
        d="M16 0H2C.9 0 0 .9 0 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 6h-3.14c-.47 0-.84.33-.97.78C11.53 8.04 10.35 9 9 9s-2.53-.96-2.89-2.22c-.13-.45-.5-.78-.97-.78H2V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3zm-3.13 7H17c.55 0 1 .45 1 1v2c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2v-2c0-.55.45-1 1-1h4.13c.47 0 .85.34.98.8a2.997 2.997 0 005.78 0c.13-.46.51-.8.98-.8z"
        fill={props.color}
      />
  </Svg>
  );
}

export default Inbox;
