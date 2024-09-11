export const getRelativeImgSrc = (path) => new URL(`/src/assets/images/${path}`, import.meta.url).href;
