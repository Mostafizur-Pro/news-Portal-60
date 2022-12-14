import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import Home from '../../Pages/Home/Home'
import Catagory from '../../Pages/Catagory/Catagory'
import News from "../../Pages/News/News";

  export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
        path: '/catagory/:id',
          element: <Catagory></Catagory>
        },
        {
          path: '/news/:id',
          element: <News></News>
        },
      ]
    }
  ])