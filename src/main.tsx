import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import "./index.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#26619A" },
    error: { main: "#FF0000" },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
