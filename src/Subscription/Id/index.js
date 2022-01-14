import React from "react";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";


const Background = styled.div`
background-color: lightgrey;
height: 100%;
width: 100%;
position: absolute;
`

const Body = styled.div`
width: 600px;
height: 100%;
margin-top: 0px;
margin: auto;
background-color: #0E0E13;
position: absolute;
top: 0;
left:0;
right:0;
margin-left:auto;
margin-right:auto;`

const Arrow = styled.img`
margin-top: 10px;
margin-left: 10px;
height: 60px;
width: 80px;
`

const Logo = styled.div`
width: 300px;
margin-left: 150px;
margin-top: 5px;
`

const D = styled.img`
width: 300px;
height: 200px`

const Driven = styled.img`
width: 300px;
height: 60px;`

const Beneficios = styled.img`
margin-left: 70px;
margin-top: 30px;
width: 180px;`

const Preco = styled.img`
margin-left: 70px;
margin-top: 30px;
width: 120px;`

const Texto = styled.div`
margin-left: 70px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: white`

const Inputs = styled.form`
width: 500px;
margin-top: 10px;
margin-left: 50px;`

const Input = styled.input`
width: ${props => props.inputWidth || `500px`};
border-style: none;
border-radius: 10px;
height: 80px;
margin-left: ${props => props.inputMarginLeft || `0px`};
margin-bottom: ${props => props.inputMargin || `10px`};
background-color: ${props => props.inputColor || "white"};
color: ${props => props.inputTextColor || "black"};
font-weight: ${props => props.inputStyle || "normal"};
font-family: 'Roboto', sans-serif;
font-size: 20px;`

const Flex = styled.div`
display: flex;
flex: wrap;`


export default function SubscriptionsId()
{

    const params = useParams();

    return(
        <Background>
            <Body>
                
                <Arrow src="/imgs/leftarrow.png"></Arrow>

                <Logo>
                    <D src="/imgs/whiteD.png"></D>
                    <Driven src="/imgs/drivenplus.png"></Driven>
                </Logo>

                <Beneficios src="/imgs/beneficios.png"></Beneficios>

                <Texto>
                    1. Brindes Exclusivos <br/>
                    2. Materiais bônus de web
                </Texto>

                <Preco src="/imgs/preco.png"></Preco>

                <Texto>
                    R$ 39,99 cobrados mensalmente
                </Texto>

                <Inputs>

                    <Input type="text" placeholder="        Nome impresso no cartão"></Input>
                    <Input type="text" placeholder="        Digitos no cartão"></Input>
                    <Flex>
                        <Input type="text" placeholder="    Código de segurança" inputWidth="245px;"></Input>
                        <Input type="text" placeholder="    Validade" inputWidth="245px;" inputMarginLeft="10px;"></Input>
                    </Flex>
                    <Input type="submit" inputColor="#FF4791" inputTextColor="white" inputStyle="bold" value="ASSINAR"></Input>
                </Inputs>





               

            </Body>
        </Background>
    );
}