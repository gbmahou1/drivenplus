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
top: 0;
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
padding-top: 250px;
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
margin-left: 180px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: white;
align-content: center;
a, a:hover, a:visited, a:active 
{
    color: inherit;
}`


export default function RegisterPage()
{
    

    const { user, setUser } = React.useContext(AuthContext);
    const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
    let navigate = useNavigate();

    function signUp(event)
    {  
        event.preventDefault();
        

        const promessa = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', {
            email: email,
            name: nome,
            cpf: cpf,
            password: senha
        });

        promessa.then(tratarSucesso);

        promessa.catch(tratarErro);


        function tratarSucesso(resposta) { 

            navigate("/");
            
         }

         function tratarErro(){
            alert("Login mal sucedido...");
          }

    }

    return(
        <Background>
            <Body>

                <Inputs onSubmit={signUp}>
                    <Input type="text" placeholder="       Nome" value={nome} onChange={e => setNome(e.target.value)}></Input>
                    <Input type="text" placeholder="       CPF" value={cpf} onChange={e => setCpf(e.target.value)}></Input>
                    <Input type="email" placeholder="       E-mail" value={email} onChange={e => setEmail(e.target.value)}></Input>
                    <Input type="password" placeholder="        Senha" inputMargin="40px" value={senha} onChange={e => setSenha(e.target.value)}></Input>
                    <Input type="submit" inputColor="#FF4791" inputTextColor="white" inputStyle="bold" value="CADASTRAR"></Input>
                </Inputs>

                <SignUp>
                    <Link to="/">Já possuí uma conta? Entre</Link>
                </SignUp>

               

            </Body>
        </Background>
    );
}