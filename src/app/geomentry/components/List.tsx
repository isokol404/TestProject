import {FC} from "react";
import {useAppSelector} from "../../store";
import {GeometryColorsEnum, ShapeEnum} from "../types";

export const List: FC = () => {
    const data = useAppSelector((state) => state.geometry.data)
    const {columns, colors, opacity, shape} = useAppSelector((state) => state.geometry.filters)

    const filtered = data.filter(({color, dark, form}) => {
        let colorBitmask = false;
        if(GeometryColorsEnum.None !== colors) {
            switch (color) {
                case "blue":
                    colorBitmask = !!(GeometryColorsEnum.Blue & colors);
                    break;
                case "yellow":
                    colorBitmask = !!(GeometryColorsEnum.Yellow & colors);
                    break;
                case "green":
                    colorBitmask = !!(GeometryColorsEnum.Green & colors);
                    break;
                case "red":
                    colorBitmask = !!(GeometryColorsEnum.Red & colors);
                    break;
            }
        } else {
            colorBitmask = true;
        }


        let opacityFlag = false;
        if(opacity === "all") {
            opacityFlag = true
        } else if(dark === true && opacity === "dark") {
            opacityFlag = true
        } else if(dark === false && opacity === "light") {
            opacityFlag = true
        }

        let shapeFlag = false;
        if(ShapeEnum.None !== shape) {
            shapeFlag = (shape === ShapeEnum.Circle && form === "circle") || (shape === ShapeEnum.Square && form === "square")
        } else {
            shapeFlag = true;
        }

        return (opacityFlag) && (colorBitmask) && (shapeFlag)
    })



    return (
        <>
            {filtered && filtered.length > 0 && (
                <div className={`grid grid-cols-${columns} gap-4`}>
                    {filtered.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.form === "circle" ? "rounded-full" : "rounded-md"} bg-${item.color}-500 w-20 h-20 m-2 ${item.dark ? 'contrast-50' : ''}`}
                        ></div>
                    ))}
                </div>
            )}
        </>


    );


}
