import { createBrowserRouter,RouterProvider } from "react-router-dom";
import {ROUTES} from "../src/routes/routes";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
    <RouterProvider router={routes} />
    </>
  );
}

export default App;
