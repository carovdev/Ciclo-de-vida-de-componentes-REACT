import React from "react";
import Footer from "./Footer"
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import Table from "./Table";


const Contentwrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">


            <div id="content">

                <TopBar />

                <ContentRowTop />

                <Table/>

            </div>

                <Footer />


        </div>
    )
}

export default Contentwrapper;