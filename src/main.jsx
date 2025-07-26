import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Product from './Product/Product.jsx'
import FarmerFirst from './FarmerFirst/FarmerFirst.jsx'
import ProductCatalog from './ProductCatalog/ProductCatalog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Product/>
      },
      {
        path: "/farmerfirst",
        element: <FarmerFirst/>
      },
      {
        path: "/product-catalog",
        element: <ProductCatalog/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
