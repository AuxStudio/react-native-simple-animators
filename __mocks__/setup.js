// Mock useNativeDriver
jest.mock('NativeAnimatedHelper');

// Fixes _bezier is not a function bug
jest.useFakeTimers();
