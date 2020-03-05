type Colors = {
  [key: string]: string;
};

const createPalette = (colors: Colors) => {
  return {
    common: {
      white: colors.white,
      black: colors.black
    },
    background: colors.background
  };
};

export default createPalette;
