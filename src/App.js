import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={routes}>
      </RouterProvider>
    </ProductProvider>
  );
}

export default App;
