import {FC, useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {useAppDispatch} from "../../store";

import {updateFilter} from "../store";
import {FilterValuesType, GeometryColorsEnum} from "../types";


export const BurgerMenuFilters: FC = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const {
    register,
    watch
  } = useForm<Omit<FilterValuesType, 'shape' | 'colors'> & {
    red: boolean;
    blue: boolean;
    green: boolean;
    yellow: boolean;
  }>({
    defaultValues: {
      red: false,
      blue: false,
      green: false,
      yellow: false,
      opacity: 'all',
      columns: 5
    }
  });

  useEffect(() => {
    watch(({red, opacity, columns, blue, green, yellow}) => {
      columns ??= 5;

      let colors = GeometryColorsEnum.None;

      if (red) {
        colors |= GeometryColorsEnum.Red
      }

      if (blue) {
        colors |= GeometryColorsEnum.Blue
      }

      if (green) {
        colors |= GeometryColorsEnum.Green
      }

      if (yellow) {
        colors |= GeometryColorsEnum.Yellow
      }

      dispatch(updateFilter({
        colors, columns: +columns, opacity
      }))
    });
  }, [])


  return (
    <form>
      <div className="text-center relative">
        <button
          className="fixed bottom-0 left-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={handleMenuClick}
          style={{zIndex: 999}}
        >
          <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Icon description</span>
          {/*Show drawer*/}
        </button>
        {/* Your menu code here */}
      </div>

      {/*-translate-x-full*/}

      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${isOpen ? "" : "-translate-x-full"}`}
        tabIndex={-1} aria-labelledby="drawer-label">


        <ul
          className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-red-200 rounded-t-lg dark:border-red-600">
            <div className="flex items-center pl-3">
              <input {...register('red')}
                     id="red" type="checkbox"
                     className="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-700 dark:focus:ring-offset-red-700 focus:ring-2 dark:bg-red-600 dark:border-red-500"/>
              <label htmlFor="red-checkbox"
                     className="w-full py-3 ml-2 text-sm font-medium text-red-900 dark:text-red-300"> красные
              </label>
            </div>
          </li>

          <li className="w-full border-b border-green-200 rounded-t-lg dark:border-green-600">
            <div className="flex items-center pl-3">
              <input {...register('green')}
                     id="green-checkbox" type="checkbox"
                     className="w-4 h-4 text-green-600 bg-green-100 border-green-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-green-700 dark:focus:ring-offset-green-700 focus:ring-2 dark:bg-green-600 dark:border-green-500"/>
              <label htmlFor="react-checkbox"
                     className="w-full py-3 ml-2 text-sm font-medium text-green-900 dark:text-green-300"> зеленые </label>
            </div>
          </li>

          <li className="w-full border-b border-blue-200 rounded-t-lg dark:border-blue-600">
            <div className="flex items-center pl-3">
              <input {...register('blue')}
                     type="checkbox"
                     className="w-4 h-4 text-blue-600 bg-blue-100 border-blue-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 dark:bg-blue-600 dark:border-blue-500"/>
              <label className="w-full py-3 ml-2 text-sm font-medium text-blue-900 dark:text-blue-300">синие </label>
            </div>
          </li>

          <li className="w-full border-b border-yellow-200 rounded-t-lg dark:border-yellow-600">
            <div className="flex items-center pl-3">
              <input {...register('yellow')}
                     id="yellow-checkbox" type="checkbox"
                     className="w-4 h-4 text-yellow-600 bg-yellow-100 border-yellow-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-yellow-700 dark:focus:ring-offset-yellow-700 focus:ring-2 dark:bg-yellow-600 dark:border-yellow-500"/>
              <label htmlFor="laravel-checkbox"
                     className="w-full py-3 ml-2 text-sm font-medium text-yellow-900 dark:text-yellow-300">желтые</label>
            </div>
          </li>
        </ul>

        {/*    радио баттоны*/}


        <fieldset>
          <legend>Выберите цвета:</legend>
          <ul
            className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input {...register('opacity')}
                       type="radio"
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                       value="all"
                />
                <label
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  все
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input {...register('opacity')}
                       type="radio"
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                       value="dark"
                />
                <label htmlFor="shadow-list-radio"
                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  темные
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input  {...register('opacity')}
                        type="radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        value="light"
                />
                <label htmlFor="light-list-radio"
                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  светлые
                </label>
              </div>
            </li>
          </ul>
        </fieldset>


        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Колонок </label>
        <div>
          {/*<input {...register('collumn_coll', {  })}/>*/}
          <input {...register('columns', {})}
                 type="number"
                 className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Введите текст здесь..."></input>
        </div>


      </div>
    </form>
  );
}
