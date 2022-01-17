import React from "react";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
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

const Cancel = styled.div`
width: 450px;
height: 80px;
border-radius: 10px;
background-color: #FF4747;
font-family: 'Roboto', sans-serif;
font-size: 30px;
color: white;
margin-left: 75px;
position: absolute;
bottom: 20px;
text-align: center;
vertical-align: middle;
line-height: 75px;`

const Alter = styled.div`
width: 450px;
height: 80px;
border-radius: 10px;
background-color: #FF4791;
font-family: 'Roboto', sans-serif;
font-size: 30px;
color: white;
margin-left: 75px;
position: absolute;
bottom: 120px;
text-align: center;
vertical-align: middle;
line-height: 75px;`

export default function Home()
{

    const { user, setUser } = React.useContext(AuthContext);
    let navigate = useNavigate();

    function Cancela()
    {
        navigate("/");
    }

    function Altera()
    {
        navigate("/");
    }




    return(

        <Background>
            <Body>

                <Alter onClick={Altera}>Mudar Plano</Alter>
                <Cancel onClick={Cancela}>Cancelar plano</Cancel>
            </Body>
        </Background>

    );
}