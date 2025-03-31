import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'
import Movies from './components/Movies.jsx'
import Genres from './components/Genres.jsx'
import EditMovie from './components/EditMovie.jsx'
import ManageCatalogue from './components/ManageCatalogue.jsx'
import GraphQL from './components/GraphQL.jsx'
import Login from './components/Login.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:< ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {
        path: "/movies",
        element: <Movies/>,
      },
      {
        path: "/genres",
        element: <Genres/>,
      },
      {
        path: "/admin/movie/0",
        element: <EditMovie/>,
      },
      {
        path: "/manage-catalogue",
        element: <ManageCatalogue/>,
      },
      {
        path: "/graphql",
        element: <GraphQL/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
