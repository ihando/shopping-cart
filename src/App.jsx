import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Errorpage from "./pages/Errorpage/Errorpage";
import Layout from "./components/Layout/Layout";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import IndividualProduct from "./pages/IndividualProduct/IndividualProduct";
import { ShopContextProvider } from "./context/shop-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:productName",
        element: <IndividualProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <Errorpage />,
  },
]);

// App component to provide the router
const App = () => {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
};

export default App;
