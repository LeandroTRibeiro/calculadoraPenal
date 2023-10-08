import { Calculator } from "@/pages/Calculator";
import { Home } from "@/pages/Home";
import { useRoutes } from "react-router-dom";

export const RouterList = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: "/calculator", element: <Calculator />},
    ]);
};