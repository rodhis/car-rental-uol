import { createTheme } from "@mui/material";

export const driverFormTheme = createTheme({
  palette: {
    primary: {
      main: "#fba403",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#b3b3b3",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
      disabled: "#b3b3b3",
    },
    background: {
      default: "#242424",
      paper: "#282828",
    },
    icon: {
      main: "#FFF",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },

          "& .MuiInputBase-input": {
            color: "#ffffff",
          },

          "& .MuiOutlinedInput-root:hover": {
            borderColor: "#ffffff",
          },
          "& .MuiSelect-icon": {
            color: "#FFF",
          },
        },
        underline: {
          "&:before": {
            borderBottom: "#FFF",
            // hehe
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          height: 80,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 0 0",
          borderRadius: 4,
          border: "1px solid #FFF",
          // width: "1vw",
          paddingTop: 20,
          margin: 10,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          width: 52,
          gap: 5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "12.5rem",
          height: "3.5rem",
          marginTop: "1rem",
          marginLeft: 10,
        },
      },
    },
  },
});
