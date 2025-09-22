import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
