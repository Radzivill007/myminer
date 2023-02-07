import "../styles/globals.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1140,
      xl: 1599,
    },
  },
});
theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      color: "red",
    },
    subtitle1: {
      color: "white",
    },
    h2: {
      color: "#141029CC",
      fontSize: "24px",
      marginBottom: "30px",
      fontWeight: 700,
      letterSpacing: "-1.33px",
      "& > div": {
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "20px",
        color: "#4579F5",
        marginBottom: "8px",
        "& > span": {
          marginRight: "16px",
          backgroundColor: "rgba(69, 121, 245, 0.03)",
          color: "#4579f5",
          display: "inline-block",
          borderRadius: "14px",
          fontSize: "13px",
          fontWeight: "600",
          lineHeight: "1.23em",
          padding: "4px 8px",
          textAlign: "center",
          letterSpacing: "0px",
        },
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "40px",
        lineHeight: "49px",
        textAlign: "center",
        marginBottom: "52px",
        "& > div": {
          marginBottom: "16px",
          "& > span": {
            fontSize: "16px",
          },
        },
      },
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          //boxShadow: "inset 0px 4px 10px rgba(127, 85, 245, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0)",
          // border: "1px solid rgb(218, 218, 218)",
        },
        root: {
          // border: "1px solid #705EF5"
        }
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // "&:hover": {
          //   border: "4px solid purple",
          // },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
          backgroundColor: "rgba(20,16,41,.02)",
          borderRadius: "8px",
          boxShadow: "inset 0px 4px 10px rgba(127, 85, 245, 0.1)",
          [theme.breakpoints.up("md")]: {
            marginBottom: "24px",
          },
          
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
