import { BasicLinearGradient, Color, Gradient } from '../shared/api/cassandra-api';
import * as ColorScheme from 'color-scheme';
import * as QixColor from 'color';
import * as Chance from 'chance';

const chance = new Chance();
import { COLORS_NAMES } from './colors';

function generateKeys(): Color[] {
  return COLORS_NAMES.map(c => c.toLowerCase());
}

function toHexCode(color: Color){
  const c = QixColor(color);
  const hex = c.hex();
  const result = hex.substr(1);
  return result;
}

function toHexHtml(hexcode: string) {
  return `#${hexcode}`;
}

function createGradient(deg: number, colors: Color[]): Gradient {
  const colorsStr = colors.join(',');
  const css = `linear-gradient(${deg}deg,${colors})`;
  return new BasicLinearGradient(css);
}

function generateGradientForColor(color: Color): Gradient {
  const cleanHex = toHexCode(color);

  const scheme = new ColorScheme();
  scheme.from_hex(cleanHex)         
        .scheme('triade')   
        .variation('soft');

  const colors = scheme.colors().map(toHexHtml).slice(0, chance.integer({min: 2, max: 4}));

  const deg = chance.integer({min: -180, max: 180});
  const result = createGradient(deg, colors);
  
  return result;
}

export function generateGradientsByKeys():  Map<Color, Gradient[]> {
  const result = new Map<Color, Gradient[]>();

  let colors = generateKeys();
  for (let c of colors) {
    const gradients: Gradient[] = [];

    const count = chance.integer({min: 2, max: 20});
    for (let i = 0; i < count; i++) {
      const g = generateGradientForColor(c);
      gradients.push(g);
    }
    result.set(c, gradients);
  }
  return result;
}