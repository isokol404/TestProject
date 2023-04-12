
export type GeometryType = {
  form: 'circle' | 'square' | 'circa' | 'triangle';
  color: string;
  dark: boolean;
}

export enum GeometryColorsEnum {
  None,
  Red    = 1 << 1,
  Blue   = 1 << 2,
  Green = 1 << 3,
  Yellow = 1 << 4,
}

export enum ShapeEnum {
  None,
  Circle    = 1 << 1,
  Square   = 1 << 2,
}


export type FilterValuesType = {
  colors: GeometryColorsEnum;
  shape: ShapeEnum;
  opacity: 'all' | 'dark' | 'light';
  columns: number;
}
