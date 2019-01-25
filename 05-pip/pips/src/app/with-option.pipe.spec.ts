import { WithOptionPipe } from './with-option.pipe';

describe('WithOptionPipe', () => {
  it('create an instance', () => {
    const pipe = new WithOptionPipe();
    expect(pipe).toBeTruthy();
  });
});
