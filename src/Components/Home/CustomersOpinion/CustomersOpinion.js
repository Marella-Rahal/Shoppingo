import React, {useState } from 'react';
import './CustomersOpinion.css';



function CustomersOpinion(props) {

    const [vHappyc,setvH]=useState(0);
    const [Happyc,setH]=useState(0);
    const [notc,setn]=useState(0);
    const [sadc,setsc]=useState(0);
    const [vsadc,setvs]=useState(0);

    return (
        <div className="container-fluid opinion">

            <h2 className='text-center' style={{color:"#0D065E"}}>Customers Opinion</h2>

            <h1 className='text-center' style={{color:"#0D065E"}}>Did you like our site</h1>

            <div className='faces'>

                <button onClick={()=>{setvH(vHappyc+1)}} className='face-btn'>&#128516;
                        <br/>
                        <span style={{fontSize:'30px',color:'#0D065E'}}>
                            {vHappyc}                
                        </span>
                </button>

                <button onClick={()=>{setH(Happyc+1)}} className='face-btn'>&#128512;
                        <br/>
                        <span style={{fontSize:'30px',color:'#0D065E'}}>
                            {Happyc}                
                        </span>
                </button>

                <button onClick={()=>{setn(notc+1)}} className='face-btn'>&#128529;
                        <br/>
                        <span style={{fontSize:'30px',color:'#0D065E'}}>
                            {notc}                
                        </span>
                </button>

                <button onClick={()=>{setsc(sadc+1)}} className='face-btn'>&#128577;
                        <br/>
                        <span style={{fontSize:'30px',color:'#0D065E'}}>
                            {sadc}                
                        </span>
                </button>

                <button onClick={()=>{setvs(vsadc+1)}} className='face-btn'>&#128542;
                        <br/>
                        <span style={{fontSize:'30px',color:'#0D065E'}}>
                            {vsadc}                
                        </span>
                </button>

            </div>

            <h1 className='text-center' style={{color:"#0D065E"}}>Please help us improve our site</h1>

            <form style={{maxWidth:'500px'}} className="text-btn">
                <div class="mb-3 mt-3">
                    <textarea className="form-control" rows="5" id="comment" name="text" placeholder='write a comment'></textarea>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button type="submit" className="send-btn">Send</button>
                </div>
            </form>

        </div>
    );
}

export default CustomersOpinion;