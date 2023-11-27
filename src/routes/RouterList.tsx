import { About } from "../pages/About";
import { Calculator } from "../pages/Calculator";
import { Dosimetry } from "../pages/Dosimetry";
import { Home } from "../pages/Home";
import { SentenceOverview } from "../pages/SentenceOverview";
import { useRoutes } from "react-router-dom";

export const RouterList = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: "/calculator", element: <Calculator />},
        {path: "/sentenceOverview", element: <SentenceOverview />},
        {path: "/about", element: <About />},
        {path: "/dosimetria", element: <Dosimetry />}
    ]);
};