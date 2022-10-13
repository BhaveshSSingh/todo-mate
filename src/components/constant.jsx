// const projects = [
//   { id: 1, name: "personal", numOfTodos: 10 },
//   { id: 2, name: "work", numOfTodos: 3 },
//   { id: 3, name: "others", numOfTodos: 2 },
// ];

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

export {
  // projects,
  calendarItems,
  defaultMaterialTheme,
};
