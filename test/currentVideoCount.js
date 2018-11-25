module.exports = function getCurrentVideoCount(availWidth) {
  const BIG_SCREEN_MIN_WIDTH = 1200;
  const MEDIUM_SCREEN_MIN_WIDTH = 720;
  const SMALL_SCREEN_MAX_WIDTH = 560;
  if (availWidth <= SMALL_SCREEN_MAX_WIDTH) return 1;
  if (availWidth > SMALL_SCREEN_MAX_WIDTH) {
    if (availWidth >= MEDIUM_SCREEN_MIN_WIDTH) {
      if (availWidth >= BIG_SCREEN_MIN_WIDTH) return 4;
      return 3;
    }
    return 2;
  }
  return 0;
};
