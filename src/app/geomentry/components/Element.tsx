import {GeometryType} from "../types";

export const Element = (props: { element: GeometryType }) =>  {
  return (
    <div>{ JSON.stringify(props.element) }</div>
  )
}