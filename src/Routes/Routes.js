import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../Components/AboutMe/AboutMe";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Portfolio from "../Components/Portfolio/Portfolio";
import PortfolioDetails from "../Components/PortfolioDetails/PortfolioDetails";
import Main from "../Layout/Main";

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
                path: '/about',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/details/:id',
                element: <PortfolioDetails></PortfolioDetails>,
                loader: ({params})=> fetch(`https://assignment-12-server-jet.vercel.app/projects/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
])
