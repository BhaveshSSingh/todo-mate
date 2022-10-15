import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const defaultMaterialTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const calendarItems = ["today", "next 7 days", "all days"];

export { calendarItems, defaultMaterialTheme };
