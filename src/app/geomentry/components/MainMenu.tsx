import {FC, useEffect} from "react";

import {useForm} from "react-hook-form";

import {useAppDispatchMain, useAppSelector} from "../../store";
import {ShapeEnum} from "../types";
import {updateFilter} from "../store";

const cssClasses = {
  form: "flex flex-row gap-x-3.5 p-4",
  item: "flex items-center",
  input: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
  label: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
}

export const MainMenu: FC = () => {
  const shape = useAppSelector(state => state.geometry.filters.shape);
  const dispatch = useAppDispatchMain();
  const {
    register,
    watch
  } = useForm({
    defaultValues: {
      circle: !!(shape & ShapeEnum.Circle),
      square: !!(shape & ShapeEnum.Square),
    }
  });

  useEffect(() => {
    watch(({circle, square}) => {
      let shape = ShapeEnum.None;

      if (circle) {
        shape |= ShapeEnum.Circle
      }

      if (square) {
        shape |= ShapeEnum.Square
      }

      dispatch(updateFilter({shape}))
    });
  }, [])

  return (
    <form className={cssClasses.form}>
      <div className={cssClasses.item}>
        <input {...register('circle')} type="checkbox" className={cssClasses.input}/>
        <label className={cssClasses.label}>Круги </label>
      </div>
      <div className={cssClasses.item}>
        <input {...register('square')} type="checkbox" className={cssClasses.input}/>
        <label className={cssClasses.label}>Квадраты</label>
      </div>
    </form>
  );
}
