import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ProductCard from '../ProductCard/ProductCard';
import Classificationbar from '../Classificationbar/Classificationbar';
import Sortbutton from '../Sortbutton/Sortbutton';
import './Shopbody.css';

function Shopbody(props) {
    return (
        <div className='back'>

            <Navbar/> 

            <div>

              <h1 style={{textAlign:'center' , color:'#0E1D51',paddingBlock:'30px'}}>Our Shop</h1>

            </div>  

            <Sortbutton/>

            <Classificationbar/>

            <div className="product">

                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>


            </div>

        </div> 

    );
}

export default Shopbody;