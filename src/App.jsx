
// App.jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Router from "./pages/Router";
import Dynamic from "./pages/Dynamic";
import Notfound from "./pages/notfound";
import CartUI from "./pages/cart";

export default function App() {
  const routers=createBrowserRouter([
    {
      path:"/",
      element: <Router/>,
      children:[
        {
         path:"/:slug?",
      element: <Home/>, 
        },
        {
          path:"/about",
      element: <About/>,
        },
        {
          path:"/contact",
      element: <Contact/>,
        },
         {
          path:"/dynamic/:id",
      element: <Dynamic/>,
        },
          {
          path:"*",
      element: <Notfound/>,
        },
           {
          path:"/cart",
      element: <CartUI/>,
        }
      ]
    }
  ])
  return (<RouterProvider router={routers}/>)
}