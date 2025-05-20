import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Banner from "../components/Banner";
import DownloadOurApp from "../components/DownloadOurApp";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: MainLayout,
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