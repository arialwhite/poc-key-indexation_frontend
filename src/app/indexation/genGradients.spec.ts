
import { Color, Gradient } from '../shared/api/cassandra-api';
import { generateGradientsByKeys } from './genGradients';

describe('genGradients', () => {

  it('it should generate gradients indexed by colors', () => {
    const res = generateGradientsByKeys();

    expect(res.size).toBeGreaterThan(0);

    res.forEach((gradients: Gradient[], color: Color) => {
      expect(color).toBeDefined();
      expect(gradients).toBeDefined();

      for (let g of gradients) {
        expect(g.toCss()).toBeDefined();
      }
    });
  });
});
