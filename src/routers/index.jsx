import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayout";

import  Home from '../pages/index'
import Blog from "../pages/blog/blog"
import SinglePost from "../pages/blog/_id";
import About from '../pages/about'
import { posts,postById } from "../apis/loaders";

import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
    path : "/",
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    children: [
        {
            path : "/",
            element: <Home />
            },
            {
                path : "/blog",
                element: <Blog />,
                loader: posts
            },
            {
                path : "/blog/:id",
                element: <SinglePost />,
                loader: postById
            },
            {
                path : "/about",
                element: <About />
            }
    ]
    }
])

