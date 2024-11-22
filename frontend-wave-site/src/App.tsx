import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PagesHome from "./home/Pages";
import PagesCluster from "./cluster/Pages";
import PagesAbout from "./about/Pages";

const router = createBrowserRouter([
  { path: "/", element: <PagesHome /> },
  { path: "/cluster", element: <PagesCluster /> },
  { path: "/about", element: <PagesAbout /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
