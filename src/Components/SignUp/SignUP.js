import React ,{Component} from 'react';
import Navbar from '../Home/Navbar/Navbar';

import {Lsection , Title ,Span ,Contain,Button1,Button1C,Button2,Button2c,Input,Input2,Container,Rsection,ButtonS,Form,BlueFacebook,RedGoogle} from './SignUPcss.js';


class SignUp extends Component {
    render (){
    return (
        <>
            <Navbar />
            <Container> 
        

                <Lsection>
            
                <Title>
                    start mangment your money stay with all fashion new
                </Title>
                <Span>
                    we will help you to discover the world fashion clothes any where you are
                </Span>
                </Lsection>
                <Rsection>

                    <Contain>
                        continue with
                    </Contain>
                    
                    <ButtonS>

                    <Button1>
                    <RedGoogle/>
                        <Button1C>
                        Google
                        </Button1C>
                    </Button1>

                    <Button2>
                        <BlueFacebook />
                        <Button2c>
                            FaceBook
                        </Button2c>
                    </Button2>

                    </ButtonS>
                    
                    <Form action="/action_page.php">
                        <Input type="text" id="fname" name="firstname"  placeholder="     Enter Your Name" ></Input>
                        <Input type="email" id="email" name="email" placeholder="     Enter Your Email" ></Input>
                        <Input type="password" id="password" name="password" placeholder="     Enter Your Password" ></Input>
                        <Input type="password" id="password" name="password" placeholder="     Confirm password " ></Input>
                        <Input2 type="submit" value="Sign Up"></Input2>
                    </Form>
                </Rsection>
            </Container>
        </>
    )}
    }
export default SignUp;