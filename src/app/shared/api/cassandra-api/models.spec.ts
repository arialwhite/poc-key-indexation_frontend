import { TestBed, inject } from '@angular/core/testing';

import { BasicLinearGradient, DEFAULT_BASIC_GRADIENT } from './models';

describe('BasicLinearGradient', () => {

  it('it can store a raw string', () => {
    const gradient = new BasicLinearGradient('linear-gradient(white, gray)');
    expect(gradient.toCss()).toBe('linear-gradient(white, gray)');
  });

  it('it handle undefined', () => {
    const gradient = new BasicLinearGradient(undefined);
    expect(gradient.toCss()).toBe(DEFAULT_BASIC_GRADIENT);
  });

  it('it handle null', () => {
    const gradient = new BasicLinearGradient(null);
    expect(gradient.toCss()).toBe(DEFAULT_BASIC_GRADIENT);
  });

  it('it handle empty string', () => {
    const gradient = new BasicLinearGradient('');
    expect(gradient.toCss()).toBe(DEFAULT_BASIC_GRADIENT);
  });

  it('it trim content', () => {
    const gradient = new BasicLinearGradient(' linear-gradient(white, gray) ');
    expect(gradient.toCss()).toBe('linear-gradient(white, gray)');
  });

});
