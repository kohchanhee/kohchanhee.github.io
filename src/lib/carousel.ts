export const getPreviousIndex = (current: number, total: number) =>
  current === 0 ? total - 1 : current - 1;

export const getNextIndex = (current: number, total: number) =>
  current === total - 1 ? 0 : current + 1;
