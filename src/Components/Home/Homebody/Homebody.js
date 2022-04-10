import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './Homebody.css';
import background from '../../../Images/Background.jpg';
import Features from '../Features/Features';
import CustomersOpinion from '../CustomersOpinion/CustomersOpinion';
import Footer from '../Footer/Footer';

function Homebody(props) {
    const route=useNavigate();
    return (
        <>
             <Navbar/>
             <div className="container-fluid h1-div-btn-margin">

                 <img src={background} className="float-end background-img" alt="Background"/>

                <h1 style={{color:'#846703'}}>WELCOME TO SHOPPINGO</h1>

                <p className="description">
                    Our website allows you to search the market from your home AND helps you control your monthly expenses and remind you of your bills
                </p>

                <button onClick={()=>{route("/Shop")}} type="button" className=" btn-mash">Shop Now</button>

                <button onClick={()=>{route("/Mangment")}} type="button" className="btn-mash">Manage Now</button>
                
             </div>
             
             <Features />

             <CustomersOpinion/>

            <Footer/>
        </>
    );
}

export default Homebody;