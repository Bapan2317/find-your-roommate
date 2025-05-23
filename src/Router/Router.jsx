import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Banner from "../components/Banner";
import DownloadOurApp from "../components/DownloadOurApp";
import ErrorPage from "../Pages/ErrorPage";
import FindRoommate from "../Pages/FindRoommate";
import RoommatesPost from "../components/RoommatesPost";
import RoommateDetails from "../components/RoommateDetails";
import BrowseListing from "../Pages/BrowseListing";
import AuthProvider from "../provider/AuthProvider";
import signIn from "../Pages/signIn";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../Pages/Register";
import MyListing from "../Pages/MyListing";
import UpdateRoommatePost from "../components/UpdateRoommatePost";
import PrivateRoute from "../provider/PrivateRoute";
// import PrivateRoute from "../provider/PrivateRoute";


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
                    loader: () => fetch("http://localhost:3000/filterRoommates"),
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
                {
                    path: "roommatePost",

                    Component: RoommatesPost
                },
                {
                    path: "roommate/:id",
                    loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                    Component: RoommateDetails
                },
                {
                    path: "browseListing",
                    loader: () => fetch("http://localhost:3000/allRoommates"),
                    // Component: BrowseListing
                    element: <BrowseListing />
                },
                {
                    path: "myListing",
                    loader: () => fetch("http://localhost:3000/allRoommates"),
                    element: <PrivateRoute> <MyListing /> </PrivateRoute>
                },
                {
                    path: "UpdateRoommatePost/:id",
                    loader: ({ params }) => fetch(`http://localhost:3000/allRoommates/${params.id}`),
                    Component: UpdateRoommatePost
                },
                {
                    path: "/findRoommate",
                    element: <PrivateRoute> <FindRoommate /> </PrivateRoute>
                },
            ]
        },

        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                {
                    path: "/auth/signIn",
                    Component: signIn
                },
                {
                    path: "/auth/register",
                    Component: Register
                },
            ]
        },


    ]
)