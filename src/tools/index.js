//@ts-check
/**
 * @param {number} delay
 */
export function debounceFactory(delay) {
  let timer = null;
  return (callback) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

/**
 * @param {number} delay
 */
export function throttleFactory(delay) {
  let preTime = Date.now();
  return (callback) => {
    let nowTime = Date.now();
    if (nowTime - preTime > delay) {
      callback();
      preTime = nowTime;
    }
  };
}
