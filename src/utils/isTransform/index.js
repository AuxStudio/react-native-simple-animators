const TRANSFORMS = ['translateX', 'translateY', 'rotate', 'scale'];

const isTransform = (prop) => {
  if (TRANSFORMS.includes(prop)) {
    return true;
  }
  return false;
};

export default isTransform;
