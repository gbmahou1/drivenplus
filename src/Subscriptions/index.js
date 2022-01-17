import React from "react";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/auth";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";


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

const Title = styled.div`
width: 500px;
height: 100px;
line-height: 100px;
margin-top: 40px;
margin-left: 50px; 
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 50px;
color: white;
text-align: center;`

const Plano = styled.img`
margin-left: 75px;
max-width: 100%;
max-height: 100%;
width: 420px;`


export default function Subscriptions()
{
    const { user, setUser } = React.useContext(AuthContext);
    let navigate = useNavigate();
    const [items, setItems] = useState([]);


    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", {
            headers: {
                "Authorization": `Bearer ${user.token}`
              }
        });

		requisicao.then(resposta => {
			setItems(resposta.data);
            console.log(items);
		});
	}, []);

    return(
        <Background>
            <Body>
                <Title>Escolha seu plano</Title>

                <Plano onClick={() => navigate("/subscriptions/1")} src="imgs/plano1.png"></Plano>
                <Plano onClick={() => navigate("/subscriptions/2")} src="imgs/plano2.png"></Plano>
                <Plano onClick={() => navigate("/subscriptions/3")} src="imgs/plano3.png"></Plano>


               

            </Body>
        </Background>
    );
}