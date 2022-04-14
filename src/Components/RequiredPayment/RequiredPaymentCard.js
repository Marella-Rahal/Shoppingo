import React from 'react';

function RequiredPaymentCard(props) {

    let monthly;
    let pay_now;

    let repeaternote;
    let MonthlyPayment;
    if(props.repeater=='yes'){
        repeaternote='visible';
        if(props.paid=='yes'){
            MonthlyPayment='yes';
        }
        else{
            MonthlyPayment='no';
        }
        monthly='flex';
        pay_now='none';
    }
    else{
        repeaternote='hidden';
        monthly='none';
        pay_now='flex';
    }

    
    

    return (
        <div style={{width:'260px',height:'fit-content',lineHeight:'40px',borderRadius:'20px',padding:'10px',backgroundColor:'rgba(208, 148, 148, 0.21)',marginBottom:'20px',marginRight:'7px',display:'flex',flexDirection:'column',boxShadow:'5px 5px 5px 5px rgba(0,0,0,0.25)'}}>

            <span style={{color:'#11324D'}}>
                Payment Name &nbsp;:&nbsp;&nbsp;
                <span style={{color:'#6B7AA1'}}>Bank</span> 
            </span>

            <span style={{color:'#11324D'}}>
                Price &nbsp;:&nbsp;&nbsp;
                <span style={{color:'#6B7AA1'}}>432000 s.p</span> 
            </span>

            <span style={{color:'#11324D'}}>
                The Rest &nbsp;:&nbsp;&nbsp;
                <span style={{color:'#6B7AA1'}}>200000 s.p</span> 
            </span>

            <span style={{color:'#11324D'}}>
                Paid So Far &nbsp;:&nbsp;&nbsp;
                <span style={{color:'#6B7AA1'}}>232000 s.p</span> 
            </span>

            <span style={{color:'#11324D'}}>
                Payment Expiry Date &nbsp;:&nbsp;&nbsp;
                <span style={{color:'#6B7AA1'}}>09/03/2022</span> 
            </span>

            <span style={{color:'#11324D'}}>
                Payment Repeater &nbsp;:&nbsp;&nbsp;
                <span style={{color:'#6B7AA1'}}>{props.repeater}</span> 
            </span>

            
            <div style={{visibility: repeaternote}}>
                {MonthlyPayment==='yes'?<span style={{color:'green'}}>Paid this month</span>:<span style={{color:'red'}}>No payment yet this month</span>}
            </div>

            

            <div style={{marginBlock:'10px',marginInline:'auto'}}>
                <button type='button' className='btn-insert' style={{width:'100px',marginRight:'25px',borderRadius:'10px'}}> Delete</button>
                <button type='button' className='btn-insert' style={{width:'100px',borderRadius:'10px'}}> Update</button>
            </div>
            <div style={{marginBlock:'10px',marginInline:'auto',display:monthly}}>
                <button type='button' className='btn-insert' style={{width:'100px',marginRight:'25px',fontSize:'11px',borderRadius:'10px'}}> Monthly Payment</button>
                <button type='button' className='btn-insert' style={{width:'100px',fontSize:'11px',borderRadius:'10px'}}> Add premiums</button>
            </div>
            <button  type='button' className='btn-insert' style={{width:'100px',justifyContent:'center',marginBlock:'10px',marginInline:'auto',borderRadius:'10px',display:pay_now}}>Pay Now</button>

  
        </div>
    );
}

export default RequiredPaymentCard;