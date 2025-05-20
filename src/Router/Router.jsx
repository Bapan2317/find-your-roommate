import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Banner from "../components/Banner";
import DownloadOurApp from "../components/DownloadOurApp";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: MainLayout,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    index: true,
                    path: "/",
                    Component: Home
                },
                {
                    path: "banner",
                    Component: Banner
                },
                {
                    path: "downloadOurApp",
                    Component: DownloadOurApp
                },

            ]
        }
    ]
)