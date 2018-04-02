
export type Color = string;

export interface Gradient {
  toCss() : string
}

export const DEFAULT_BASIC_GRADIENT = 'linear-gradient(#fff, #eee)';

export class BasicLinearGradient implements Gradient {
  private css: string;

  constructor(
    css: string
  ){
    this.css = this.sanitize(css);
  };

  private sanitize(value: string) {
    if (!value) {
      return DEFAULT_BASIC_GRADIENT;
    }
    let tr = value.trim();
    return tr ? tr : DEFAULT_BASIC_GRADIENT;
  }
  
  toCss() : string {return this.css};
}




