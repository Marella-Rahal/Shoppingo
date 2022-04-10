import React from 'react';
import './Features.css';
import feature1 from '../../../Images/feature1.jpg';
import feature2 from '../../../Images/feature2.png';
import feature3 from '../../../Images/feature3.jpg';


function Features(props) {
    return (
        <div className = "feature">

             <h2 style={{color:'#0D065E',textAlign:'center',marginTop:'7px',paddingTop:'20px'}}>OUR SERVICES</h2>

            <div className="d-flex flex-wrap justify-content-around">
                    <div>

                        <img src={feature1} className="img-feature img-feature1" alt="feature1"/>

                        <h4 style={{color:'0D065E',textAlign:'center',marginTop:'7px'}}>the nearest shop</h4>

                        <p style={{color:'#886918', maxWidth:'240px',marginLeft:'25px'}}>
                            Our site allows you to see the location of the store closest to you
                        </p>

                    </div>
                    <div>

                        <img src={feature2} className="rounded-circle img-feature" alt="feature2"/>

                        <h4 style={{color:'0D065E',textAlign:'center',marginTop:'7px'}}>manage your money</h4>

                        <p style={{color:'#886918', maxWidth:'240px',marginLeft:'25px'}}>
                            Our site allows you to 
                            organize your expenses
                            and send notifications
                            to remind you of your bills
                            and obligations
                        </p>

                    </div>
                    <div>
                        <img src={feature3} className="img-feature img-feature3" alt="feature3"/>

                        <h4 style={{color:'0D065E',textAlign:'center',marginTop:'7px',marginTop:'40px'}}>Guidance for the goal</h4>

                        <p style={{color:'#886918', maxWidth:'240px',marginLeft:'25px'}}>
                            Our site allows you to choose your clothes with caution as it compares prices in different stores
                        </p>

                    </div>
            </div>

        </div>
    );
}

export default Features;