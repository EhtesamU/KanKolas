import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const UserAvatar = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 18 18" >
      <Path
      d="M11.5 11.5a3.726 3.726 0 003.727-3.727A3.726 3.726 0 0011.5 4.046a3.726 3.726 0 00-3.727 3.727A3.726 3.726 0 0011.5 11.5zm0 1.864c-2.488 0-7.455 1.249-7.455 3.727v1.864h14.91v-1.864c0-2.478-4.967-3.727-7.455-3.727z"
      fill={props.color}
      />
    </Svg>
  )
}

export default UserAvatar;
