import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
    ],
  },
  {
    path: "instructors",
    element: <Instructors></Instructors>,
  },
]);

export default router;
