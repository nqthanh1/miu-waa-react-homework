import React from "react";
import Header from "./Header";
import PageRoutes from "../routes/PageRoutes";

function Dashboard() {


    return (
        
        <div className="w-[100%]">
            <div className="w-[100%]" >
                <Header />
            </div>
            <div className="Post">
                <PageRoutes />
            </div>
        </div>
    );
}

export default Dashboard;