import isTransform from '../';

it('returns false on invalid transform prop', () => {
  expect(isTransform('width')).toBe(false);
  expect(isTransform('height')).toBe(false);
});

it('returns true on valid transform prop', () => {
  expect(isTransform('translateX')).toBe(true);
  expect(isTransform('translateY')).toBe(true);
  expect(isTransform('rotate')).toBe(true);
  expect(isTransform('scale')).toBe(true);
});
