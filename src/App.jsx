import './styles/main.scss';
import {createBrowserRouter} from "react-router";
import {ROUTES} from "./routes/ROUTES.jsx";
import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {PulseLoader} from "react-spinners";

function App() {
    const routes = createBrowserRouter(ROUTES);

    return (
        <Suspense fallback={<PulseLoader/>}>
            <RouterProvider router={routes}/>
        </Suspense>
    )
}

export default App