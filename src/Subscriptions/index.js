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

const Plano = styled.div`
margin-left: 75px;
height: 250px;
width: 420px;
border-style: solid;
border-color: grey;
border-radius: 10px;
border-size: 5px;
margin-bottom: 10px;
display: flex;
flex: wrap;`

const PlanoImg = styled.img`
margin-top: 5px;
height: 240px;
width: 240px;
max-height: 100%;
max-width: 100%;`

const PlanoPreco = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: bolder;
font-size: 25px;
color: white;
line-height: 50px;
margin-top: 100px;
margin-left: 30px;
`


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
            console.log(resposta.data);
		});
	}, []);

    function Mapeia(lista)
    {
        return(
        <Plano onClick={() => navigate(`/subscriptions/${lista.id}`)} >
            <PlanoImg src={`${lista.image}`}></PlanoImg>
            <PlanoPreco>${lista.price}</PlanoPreco>
        </Plano>);
    }

    return(
    <>{items.length === 0 ? (<div>Loading</div>) 
  : (
    <Background>
        <Body>
    <Title>Escolha seu plano</Title>
            {items.map (item => { Mapeia(item)})}

        </Body>
    </Background>
  )

    }</>);
}