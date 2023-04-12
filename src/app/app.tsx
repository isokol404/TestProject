import {useEffect} from "react";

import {
  List,
  MainMenu,
  BurgerMenuFilters,
  fetchGeometry
} from "./geomentry";

import {useAppDispatch} from "./store";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGeometry());
  }, [])

  return (
    <>
      <MainMenu></MainMenu>
      <BurgerMenuFilters></BurgerMenuFilters>
      <List></List>
    </>

  )
}
