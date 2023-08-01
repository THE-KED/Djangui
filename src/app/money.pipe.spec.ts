import { MoneyPipe } from './money.pipe';

describe('MoneyPipe', () => {
  const pipe = new MoneyPipe();

  it('transform "40000" to 40 000F', () => {
    expect(pipe.transform(40000)).toBe("40 000F");
  });

  it('transform "4000" to 4 000F', () => {
    expect(pipe.transform(4000)).toBe("4 000F");
  });
});
