import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Pending = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 12 20" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M-6-2h24v24H-6z" />
        <Path
          d="M0 0v6h.01L0 6.01 4 10l-4 4 .01.01H0V20h12v-5.99h-.01L12 14l-4-4 4-3.99-.01-.01H12V0H0zm10 14.5V18H2v-3.5l4-4 4 4zm-4-5l-4-4V2h8v3.5l-4 4z"
          fill={props.color}
        />
      </G>
    </Svg>
  )
}

export default Pending;
