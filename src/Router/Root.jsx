import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="maxCont ">
            <Outlet></Outlet>
            </div>
           
            


        </div>
    );
};

export default Root;