import { hexToRgb } from './hexToRgb';

export const rgba = (color: string, opacity: string | number) =>
  `rgba(${hexToRgb(color)}, ${opacity})`;
