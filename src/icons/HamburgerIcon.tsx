import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Hamburger = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 18 12">
        <Path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="black"/>
    </Svg>
  )
}

export default Hamburger;
