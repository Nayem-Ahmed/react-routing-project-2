import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
    return (
        <div>
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;