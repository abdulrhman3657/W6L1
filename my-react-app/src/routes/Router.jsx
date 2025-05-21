import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Programs from "../pages/Programs";

const LayOut = () => {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {path: "/", element: <Home/>},
      {path: "about", element: <About/>},
      {path: "contact", element: <Contact/>},
      {path: "programs", element: <Programs/>}
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
