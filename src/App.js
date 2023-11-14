import { RouterProvider } from "react-router-dom";
import "./App.css";

import { routes } from "./routes/routes";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <RouterProvider router={routes} />
    </SnackbarProvider>
  );
}

export default App;
