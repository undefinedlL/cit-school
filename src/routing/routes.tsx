import pages from "../pages";

const routes = [
    {index: true, element: <pages.RootPage />},
    {path: '/courses/:id', element: <pages.CoursePage/>},
    {path: '/courses', element: <pages.CoursesPage/>},
    {path: '/about', element: <pages.AboutPage/>},
    {path: '/contacts', element: <pages.ContactsPage/>}
];
export default routes;