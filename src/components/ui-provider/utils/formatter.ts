/* eslint-disable import/prefer-default-export */
export const shortId = (length: number) => {
  return `_${Math.random().toString(length).substr(2, 9)}`;
};
