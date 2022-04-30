import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import LSbackground from '../../Images/SignUp2.jpg';
import {
  Container,
  FullScreen,
  Popup,
  ChooseButton,
  Lsection,
  Overlay,
  Title,
  ChooseContainer,
  Span,
  Rsection,
  Content,
  Link1,
  Input,
  Input2,
  Form,
  FormContent,
  Link2,
  VLine,
  HLine,
  Sendcode
} from '../LogIn/LogIncss';
import { useNavigate } from 'react-router';
import $ from 'jquery';

function ResetPassword(props) {
    const route = useNavigate();
    const handlesubmit = (e) => {
      e.preventDefault();
      $('.popupdiv').fadeTo(700, 1);
      $('.fullscreen').fadeTo(700, 1);
      $('body').css('overflow', 'hidden');
    };

    return (
        <>
            <Navbar />
            <Container>
                <FullScreen className="fullscreen">
                    <Popup className="popupdiv">
                        <h1
                        style={{
                            color: 'white',
                            paddingBottom: '50px',
                            textAlign: 'center',
                        }}
                        >
                        Where would You Go
                        </h1>
                        <ChooseContainer>
                        <ChooseButton
                            type="button"
                            onClick={() => {
                            route('/Mangment/Dashbord');
                            $('body').css('overflow', 'auto');
                            }}
                        >
                            Manage Your Money
                        </ChooseButton>
                        <VLine />
                        <ChooseButton
                            type="button"
                            onClick={() => {
                            route('/Shop');
                            $('body').css('overflow', 'auto');
                            }}
                        >
                            Find Your Product
                        </ChooseButton>
                        </ChooseContainer>
                    </Popup>
                </FullScreen>
                <Lsection>
                    <img
                        src={LSbackground}
                        style={{ width: '100%', height: '100%', opacity: '0.4' }}
                    />
                    <Overlay>
                        <Title>Welcome Back</Title>
                        <Span>
                        we will help you to discover the world fashion clothes any where
                        you are
                        </Span>
                    </Overlay>
                </Lsection>

                <HLine />

                <Rsection>

                
                <h2 style={{color:'#6B7AA1'}}> Reset Password </h2>

                <Form>
                    <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="     Enter Your Email address"
                    ></Input>
                    <Sendcode>send code</Sendcode>

                    <Input
                    type="text"
                    id="code"
                    name="code"
                    placeholder="       Enter  the code we sent to your email"
                    ></Input>

                    <Input2 style={{alignSelf:'self-end'}}>Check code</Input2>

                    <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="     Enter New Password"
                    ></Input>

                    <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="     Confirm Password"
                    ></Input>

                    <Input2 style={{alignSelf:'self-end'}} onClick={handlesubmit}>Update Password</Input2>


                </Form>

                </Rsection>

            </Container>    
            
        </>
    )
}

export default ResetPassword;