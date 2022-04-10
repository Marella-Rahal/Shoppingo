import React ,{Component} from 'react';
import Navbar from '../Home/Navbar/Navbar';
import {Container,Lsection,Title,Span,Rsection,Content,Link,Input,Input2,Form,FormContent,Link2,} from './LogIncss'

class LogIn extends Component {
render (){
    return(
        <>
        <Navbar />
        <Container>
            <Lsection>
                <Title>
                    Welcome Back
                </Title>
                <Span>
                    we will help you to discover the world fashion clothes any where you are 
                </Span>
            </Lsection>
            <Rsection>
                <Content>
                Sign in to your account or <Link href='/SignUP'>create a new account</Link>
                </Content>      
                 <Form action="/action_page.php">
                    <Input type="email" id="email" name="email" placeholder="     Enter Your Email" ></Input>
                    <Input type="password" id="password" name="password" placeholder="     Enter Your Password" ></Input>
                    <FormContent>
                    <Input2 type="submit" value="Log In"></Input2>
                    <Link2 >Forget your password?</Link2>
                    </FormContent>
                </Form> 
                </Rsection>
        </Container>
        </>
    );
}}
export default LogIn ;