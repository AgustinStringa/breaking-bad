import './index.css'
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Application = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Boton = styled.button`
  border: 2px solid #e0ac3e;
  background: linear-gradient(to left, #0f4f40, #00722c);
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 30%, #0f574e 100% );
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  background-size: 200px;
  &:hover {
    background-size: 400px;
  }
`;

const Walt = styled.div`
width: 100px;
height: 100px;

background-position: center;
background-size: contain;
background-attachment: local;
margin: 1rem auto;
filter: saturate(0%);
mix-blend-mode: soft-light;
`
const Footer = styled.footer`
width: 100%;
background-color: #171717 ;
font-family:  "Segoe UI";
color: #fff;
padding: 1rem;
text-align: center;
& > p {
  text-align: center;
  padding-bottom: 1rem ;
}
`;
function App() {
  const [cargando, setCargando] = useState(false);
  const [phrase, setPhrase] = useState({});
  const URL_API = "https://api.breakingbadquotes.xyz/v1/quotes";
  const getPhrase = async () => {
    setCargando(true);
    const data = await fetch(URL_API, {
      mode: "cors",
      Accept: "application/json",
    });

    const response = await data.json();


    setTimeout(() => {
      setCargando(false);
      setPhrase(response[0]);
    }, 2000);
  };

  useEffect(() => {
    getPhrase();
  }, [])
  return (
    <>
      <Application>
        <header><h1><span>Br</span>eaking <br /><span>Ba</span>d</h1></header>
        <main>
          {Object.keys(phrase).length && !cargando ? <Frase phrase={phrase} /> : null}
          {cargando ? <Walt className={cargando ? 'walt walt-spin' : 'walt'}></Walt> : null}

          <Boton onClick={getPhrase}>GET A PHRASE</Boton>


        </main>

      </Application>
      <Footer>
        <p>Proyecto realizado por agustínstringa</p>
        <a rel="noreferrer" target="_blank" href='https://github.com/AgustinStringa/breaking-bad' alt="enlace al codigo fuente">Link to github</a>
      </Footer>
    </>
  );
}

export default App;
