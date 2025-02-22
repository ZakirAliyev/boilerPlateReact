import MainPage from "../pages/index.jsx";
import HomePage from "../pages/HomePage/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            }
        ]
    }
];