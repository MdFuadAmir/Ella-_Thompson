import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'project/:id',
        element:<ProjectDetails/>
      }
      
    ],
  },
]);

export default router;
