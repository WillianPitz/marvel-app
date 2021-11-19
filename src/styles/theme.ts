export const theme = {
  colors: {
    //primarias
    white: "#FFFFFF",
    red: "#f0141e",
    redVariant: "#740000",

    //textos
    textWhite: "#FFFFFF",
    textBlack: "#202020",

    // botões
    buttonRed: "#740000",
  },
} as const;

export type Theme = typeof theme;
