import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: "gray.200",
    }),
  },
  components: {

  }
});
