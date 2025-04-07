import chroma from 'chroma-js';

export const hexToRgb = (color: string | number) =>
  chroma(color).rgb().join(', ');
