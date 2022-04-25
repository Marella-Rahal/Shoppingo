import React from 'react'
import SideNavbar from '../AddProduct/SideNavbar/SideNavbar';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import BarChart2 from './BarChart';
import PieChart2 from './PieChart';
import { Route, Link, useNavigate } from 'react-router-dom';
import {
  TopNavbar,
  Content,
 
} from '../AddProduct/Home/AddProductCss';
import {
  Container,
  HeaderImage
} from '../Profile/ProfileInfoCss'
import { IconButton } from '@mui/material';
import{Lsection,TlSection,ParentSection,Span,Button,InnerContainer,Bsection,BsectionContent,MiddleSection,MiddleSectionContent,PaymentInfo,RightSection,ColorDiv,ColorButton,ColorContainer} from'./DashboardCss';
import { PaymentsContainer, PaymentsInfo, Paragraph, Input, InputContainer, FormContainer } from '../InsertPaymentPage/InsertPaymentcss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import IncomePopup from '../PopUp/IncomePopup';
import $ from 'jquery';

function Dashboard() {
  const route = useNavigate();

  const handlePopup=(e)=>{
    e.preventDefault();
    $(".popupdiv").fadeTo(700,1);
    $(".fullscreen").fadeTo(700,1);
    $('body').css("overflow","hidden");
  }

  return (
    <Container>
    <IncomePopup title="Please Insert Your Income Value"/>
    <SideNavbar />
    <InnerContainer>
      <TopNavbar style={{justifyContent: "end"}}>
       
        <div
          style={{
            display: 'flex',
            paddingTop: '10px',
            paddingRight: '10px',
            height: '100%',
          }}
        >
          <Link to="/Favourite">
            <IconButton
              onClick={() => {
                Route('/Favourite');
              }}
              style={{ color: '#6B7AA1' }}
            >
              <Favorite />
            </IconButton>
          </Link>

          <Link to="/ShoppingCard">
            <IconButton
              onClick={() => {
                Route('/ShoppingCard');
              }}
              style={{ color: '#6B7AA1' }}
            >
              <AddShoppingCart />
            </IconButton>
          </Link>

          <div style={{ marginTop: '7px', fontSize: '15px' }}>
            Hello,Hasan
          </div>


          <HeaderImage onClick={() => { route('/Profile') }} />


        </div>
      </TopNavbar>
      <Content style={{ marginTop: '15px' , flexDirection:"column"}}>
      <PaymentsContainer style={{marginBottom:"30PX"}}>
            <PaymentsInfo>

              <Paragraph>Total income</Paragraph>
              <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <Paragraph>335,000 S.P</Paragraph>
                <button style={{background:"none",border:"none",color: "#11324D"}} onClick={handlePopup}>
                  <AddCircleOutlineIcon style={{ marginRight: "15px", fontSize: "xx-large" }}></AddCircleOutlineIcon>
                </button>
              </div>
            </PaymentsInfo>
            <PaymentsInfo style={{ margin: '0px 5%' }}>
              <Paragraph>Balance</Paragraph>
              <Paragraph>200,500 S.P</Paragraph>
            
            </PaymentsInfo>

            <PaymentsInfo>
              <Paragraph>
                Total Payments
              </Paragraph>
              <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
              <Paragraph>134,500 S.P </Paragraph>
              
              {/* <Link to='#'style={{ marginRight: "10px",textDecoration: "none" , color: "#6b7aa1" ,fontSize:"small"}} onClick={()=>{route('#')}}>View All<KeyboardDoubleArrowRightIcon style={{fontSize:"small"}}/></Link> */}
              </div> 
            </PaymentsInfo>

          </PaymentsContainer>
            <ParentSection>
              <Lsection>
                  <TlSection style={{paddingTop:"10px"}}>
                    <Span>
                      Payment Required
                    </Span>
                    <Button onClick={()=>{route('/Mangment/InsertRequiredPayments')}}>Insert New Payment</Button>              
                  </TlSection>

                  <Bsection>
                    <BsectionContent>
                      <span>
                          Bank
                      </span>
                      <span>
                          Until 
                      </span>
                    </BsectionContent>
                    <BsectionContent>
                      <span>
                          34,200
                      </span>
                      <span>
                          09/03/2022 
                      </span>
                    </BsectionContent>
                  </Bsection>
                  <Bsection>
                    <BsectionContent>
                      <span>
                          Bank
                      </span>
                      <span>
                          Until 
                      </span>
                    </BsectionContent>
                    <BsectionContent>
                      <span>
                          34,200
                      </span>
                      <span>
                          09/03/2022 
                      </span>
                    </BsectionContent>
                  </Bsection>
                  <Bsection>
                    <BsectionContent>
                      <span>
                          Bank
                      </span>
                      <span>
                          Until 
                      </span>
                    </BsectionContent>
                    <BsectionContent>
                      <span>
                          34,200
                      </span>
                      <span>
                          09/03/2022 
                      </span>
                    </BsectionContent>
                  </Bsection>
                  <Bsection>
                    <BsectionContent>
                      <span>
                          Bank
                      </span>
                      <span>
                          Until 
                      </span>
                    </BsectionContent>
                    <BsectionContent>
                      <span>
                          34,200
                      </span>
                      <span>
                          09/03/2022 
                      </span>
                    </BsectionContent>
                    </Bsection>
                    <Link to='/Mangment/RequiredPayments'style={{ marginRight: "10px",textDecoration: "none" , color: "#6b7aa1" ,fontSize:"larger"}}>View All<KeyboardDoubleArrowRightIcon style={{fontSize:"small"}}/></Link>
              </Lsection>
              <MiddleSection>
                <MiddleSectionContent>
              <TlSection style={{padding:" 0px 10px"}}>
                    <Span>
                      Payments
                    </Span>
                    <Button onClick={()=>{route('/Mangment/InsertPayments')}}>Insert New Payment</Button>              
                  </TlSection>
                  <PaymentInfo>
                    <div>
                    <CreditCardIcon  style={{color: "#11324D" ,marginRight: "5px",marginBottom: "3px"}}/>
                    <span style={{color: "#11324D"}}>Segarette</span>
                    </div>
                    <span style={{color: " #6B7AA1"}}>-10,000 sp</span>
                  </PaymentInfo>
                  <PaymentInfo>
                    <div>
                    <CreditCardIcon  style={{color: "#11324D" ,marginRight: "5px",marginBottom: "3px"}}/>
                    <span style={{color: "#11324D"}}>Segarette</span>
                    </div>
                    <span style={{color: " #6B7AA1"}}>-10,000 sp</span>
                  </PaymentInfo>   
                  <PaymentInfo>
                    <div>
                    <CreditCardIcon  style={{color: "#11324D" ,marginRight: "5px",marginBottom: "3px"}}/>
                    <span style={{color: "#11324D"}}>Segarette</span>
                    </div>
                    <span style={{color: " #6B7AA1"}}>-10,000 sp</span>
                  </PaymentInfo>   <PaymentInfo>
                    <div>
                    <CreditCardIcon  style={{color: "#11324D",marginRight: "5px",marginBottom: "3px"}}/>
                    <span style={{color: "#11324D"}}>Segarette</span>
                    </div>
                    <span style={{color: " #6B7AA1"}}>-10,000 sp</span>
                  </PaymentInfo>   <PaymentInfo>
                    <div>
                    <CreditCardIcon  style={{color: "#11324D",marginRight: "5px",marginBottom: "3px"}}/>
                    <span style={{color: "#11324D"}}>Segarette</span>
                    </div>
                    <span style={{color: " #6B7AA1"}}>-10,000 sp</span>
                  </PaymentInfo>
                  </MiddleSectionContent>
                  <Link to='/Mangment/Payments'style={{ marginRight: "10px",textDecoration: "none" ,     marginTop: "10px",color: "#6b7aa1" ,fontSize:"larger"}}>View All<KeyboardDoubleArrowRightIcon style={{fontSize:"small"}}/></Link>
              </MiddleSection>
              <RightSection className="PieCHART">
              
               <PieChart2 style={{width:"100% !important"}}  /> 
               <ColorContainer>
                            <ColorDiv>
                                <div style={{display:"flex"}}>
                                  <ColorButton style={{backgroundColor:"aqua"}}/>
                                  <p>
                                      Food
                                  </p>
                                </div>
                                <div style={{display:"flex"}}>
                                  <ColorButton style={{backgroundColor:"#86E3CE"}}/>
                                  <p>
                                    Clothes
                                  </p>
                                </div>
                                <div style={{display:"flex"}}>
                                  <ColorButton style={{backgroundColor:"#D0E6A5"}}/>
                                  <p>
                                    Transport
                                  </p>
                                </div>
                            </ColorDiv>
                            <ColorDiv>
                              <div style={{display:"flex"}}>
                                <ColorButton style={{backgroundColor:"#FFDD94"}}/>
                                <p>
                                 School Cost
                                </p>
                                </div>
                              <div style={{display:"flex"}}>
                                <ColorButton style={{backgroundColor:"#FA897B"}}/>
                                <p>
                                  Health Inserunce
                                </p>
                              </div>
                              <div style={{display:"flex"}}>
                                <ColorButton style={{backgroundColor:"#CCABD8"}}/>
                                <p>
                                  Entertainment
                                </p>
                              </div>
                            </ColorDiv>
                            <div style={{display:"flex"}}>
                              <ColorButton style={{backgroundColor:"grey"}}/>
                              <p>
                               Others
                              </p>
                              </div>
               </ColorContainer>
               </RightSection>
            </ParentSection>
              <div style={{marginTop:"20px"}} >
              <BarChart2 ></BarChart2>
              </div> 
      </Content>
      </InnerContainer>
      </Container>

  )
}

export default Dashboard;