import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import { Home, Product, Products } from "./pages"
import { Suspense } from "react"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Home />
          </Suspense>
        },
        {
          path: '/products/:category',
          element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Products />
          </Suspense>
        },
        {
          path: '/product/:id',
          element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Product />
          </Suspense>
        },
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App