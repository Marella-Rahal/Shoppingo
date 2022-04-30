import styled from 'styled-components'

export const ProduactSection=styled.div`
width:100%;
display:flex;
flex-direction:column ; 
`
export const PaymentsInfo = styled.div`
background: rgba(244, 196, 68, 0.85);
border-radius: 35px;
display:flex;
flex-direction:column;
WIDTH: 40%;
JUSTIFY-CONTENT: start;
ALIGN-ITEMS: flex-start;
@media (max-width: 910px) {
    width:100%;
    margin: 15px 0px !important;
  }



`

export const TopProductSection=styled.div`
width:100%;
margin: 30px 0px 30px 20px;

`
export const ProductContainer=styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export const AddButton=styled.button`
background:#F4C444;
color:#11324D;
border:none;
border-radius: 15px;
margin:20px 30px 0 0;
padding:3px;
width:20%;
&:hover{
  color:#F4C444;
  background-color:#11324D;
}

`