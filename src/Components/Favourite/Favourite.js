import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Favourite.css';
import ProductCard from '../Shop/ProductCard/ProductCard';

function Favourite(props) {
    return (
        <div className='back-heart'>

            <Navbar/> 

            <div>

              <h1 style={{textAlign:'center' , color:'#0E1D51',paddingBlock:'30px'}}> My Favourite</h1>

            </div>

            <div className='product-heart'> 

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
            <ProductCard/>


            </div>    

        </div>    
    );
}

export default Favourite;