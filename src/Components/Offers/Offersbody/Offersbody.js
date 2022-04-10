import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ProductCard from '../ProductCard/ProductCard';
import Classificationbar from '../Classificationbar/Classificationbar';
import Sortbutton from '../Sortbutton/Sortbutton';
import './Offersbody.css';

function Offersbody(props) {
    return (
        <div className='back-offers'>

            <Navbar/> 

            <div>

              <h1 style={{textAlign:'center' , color:'#0E1D51',paddingBlock:'30px'}}> Our Offers</h1>

            </div>  

            <Sortbutton/>

            <Classificationbar/>

            <div className="product-offers">

                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
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

export default Offersbody;