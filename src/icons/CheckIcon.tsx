import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const CheckedFill = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 18 18">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.25 0A2.25 2.25 0 000 2.25v13.5A2.25 2.25 0 002.25 18h13.5A2.25 2.25 0 0018 15.75V2.25A2.25 2.25 0 0015.75 0H2.25zm11.284 5.591a.843.843 0 00-1.215.025l-3.907 4.978-2.355-2.356a.844.844 0 00-1.193 1.193l2.977 2.978a.842.842 0 001.214-.023l4.491-5.613a.844.844 0 00-.011-1.182h-.001z"
          fill={props.color}
        />
    </Svg>
  )
}
 
export default CheckedFill;
