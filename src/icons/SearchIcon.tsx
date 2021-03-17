import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Search = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 20 20" >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.524 14.23a7.55 7.55 0 11.707-.707l-.066-.065-.707.707.066.066zm.708.71a8.55 8.55 0 11.707-.707l5.803 5.802-.707.707-5.803-5.803z"
        fill={props.color}
        fillOpacity={0.8}
      />
    </Svg>
  )
}

export default Search;
