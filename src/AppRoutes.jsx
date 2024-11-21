import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Ex01 from './pages/Ex01'
import Ex02 from './pages/Ex02'
import Ex03 from './pages/Ex03'
import Ex04 from './pages/Ex04'
import Ex05 from './pages/Ex05'
import Ex06 from './pages/Ex06'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/1",
    element: <Ex01 />
  },
  {
    path: "/2",
    element: <Ex02 />
  },
  {
    path: "/3",
    element: <Ex03 />
  },
  {
    path: "/4",
    element: <Ex04 />
  },
  {
    path: "/5",
    element: <Ex05 />
  },
  {
    path: "/6",
    element: <Ex06 />
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
    v7_prependBasename: true
  },
  basename: '/' // 필요한 경우 base path 설정
})

const AppRoutes = () => (
  <RouterProvider 
    router={router} 
    future={{
      v7_startTransition: true
    }}
  />
)

export default AppRoutes