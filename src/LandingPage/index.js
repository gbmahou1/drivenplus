import React from "react";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "../Providers/auth";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Background = styled.div`
background-color: lightgrey;
height: 100%;
width: 100%;
position: absolute;`

const Body = styled.div`
width: 600px;
height: 100%;
margin: auto;
background-color: #0E0E13;`

const Logo = styled.img`
max-width: 90%;
max-height: 100%;
margin-left: 5%;
margin-top: 150px;
`

const Inputs = styled.form`
width: 500px;
margin-top: 100px;
margin-left: 50px;`

const Input = styled.input`
width: 500px;
border-style: none;
border-radius: 10px;
height: 80px;
margin-bottom: ${props => props.inputMargin || `20px`};
background-color: ${props => props.inputColor || "white"};
color: ${props => props.inputTextColor || "black"};
font-weight: ${props => props.inputStyle || "normal"};
font-family: 'Roboto', sans-serif;
font-size: 20px;`

const SignUp = styled.div`
width: 500px;
margin-left: 130px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: white;
align-content: center;
a, a:hover, a:visited, a:active 
{
    color: inherit;
}`


export default function LandingPage()
{

    

    const { user, setUser } = React.useContext(AuthContext);

    const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
    let navigate = useNavigate();

    function fazerLogin(event)
    {  
        event.preventDefault();
        const promessa = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {
            email: email,
            password: senha,
        });

        promessa.then(tratarSucesso); 
        promessa.catch(tratarErro);


        function tratarSucesso(resposta) { 
            setUser (resposta.data);

            if (user.membership == null)
            {
                navigate("/subscriptions");
            }
         }

         function tratarErro(){
            alert("Login mal sucedido...");
          }

    }

    return(
        <Background>
            <Body>
                <Logo src="imgs/drivenlogo.png"></Logo>

                <Inputs onSubmit={fazerLogin}>
                    <Input type="email" placeholder="       E-mail" value={email} onChange={e => setEmail(e.target.value)}></Input>
                    <Input type="password" placeholder="        Senha" inputMargin="40px" value={senha} onChange={e => setSenha(e.target.value)}></Input>
                    <Input type="submit" inputColor="#FF4791" inputTextColor="white" inputStyle="bold" value="ENTRAR"></Input>
                </Inputs>

                <SignUp>
                    <Link to="/sign-up">Não possuí uma conta? Cadastre-se</Link>
                </SignUp>

               

            </Body>
        </Background>
    );
}