import { lazy } from "react";
import FrontendLayout from "../layouts/FrontendLayout";

const HomePage = lazy(() => import("../views/IndexPage"));

export const LandingpageRouter = [
    {
        path: "/",
        element: <FrontendLayout HeaderMega="true" FooterCompact="true" />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
];