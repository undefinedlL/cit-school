import { createBrowserRouter } from "react-router";
import App from "../App";
import routes from "./routes";
import { NotFoundPage } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: routes.map((route) => ({
            ...route,
            errorElement: <NotFoundPage/>
        }))
    },],
{
    basename: "/cit-school/"
}
);

export default router;