import React from 'react'


import "../../../styles/App.css"
import ReactDOM from "react-dom";


const Home = () => (
    <div id="hero"  className="Hero" style={{backgroundImage: "url(https://images-1.wuaki.tv/system/images/46/original/register-slider-generic-1548402588-width1920-quality80.jpeg)"}}>

    </div>

)

export default Home;
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;