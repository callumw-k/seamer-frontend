export const breakpoints = {
  sm: "@media screen and (min-width: 640px)",
  md: "@media screen and (min-width: 768px)",
  lg: "@media screen and (min-width: 1024px)",
  xl: "@media screen and (min-width: 1280px)",
  xl2: "@media screen and (min-width: 1536px)",
  max_md: "@media screen and (max-width: 768px)",
};

export const centre_content = {
  md: `margin: 0 auto; width: 90%; max-width: 1024px;`,
  lg: `margin: 0 auto; width: 90%; max-width: 1280px;`,
  xl: `margin: 0 auto; width: 90%; max-width: 1564px;`,
  xxl: `margin: 0 auto; width: 90%; max-width: 1800px;`,
  xxxl: `margin: 0 auto; width: 90%; max-width: 2100px;`,
  md_no_margin: ` width: 90%; max-width: 1024px;`,
};

export const fontMarginReset = `
  margin: 0;
`;
