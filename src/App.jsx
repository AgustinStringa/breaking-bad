import "./index.css";
import React, { useState, useEffect } from "react";
import Frase from "./components/Frase";
import { getPhrases } from "./services/phraseService";
import { Spinner, LoadingOverlay, Header, Footer } from "../shared";

import logoWalt from "./images/heisenberg.png";

function App() {
  const [cargando, setCargando] = useState(true);
  const [phrase, setPhrase] = useState(null);
  const [phrases, setPhrases] = useState([]);

  const getRandomPhrase = (phraseList) => {
    if (!phraseList.length) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * phraseList.length);
    return phraseList[randomIndex];
  };

  useEffect(() => {
    const loadPhrases = async () => {
      try {
        const loadedPhrases = await getPhrases();
        setPhrases(loadedPhrases);
        setPhrase(getRandomPhrase(loadedPhrases));
      } finally {
        setCargando(false);
      }
    };

    loadPhrases();
  }, []);

  const getPhrase = async () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setPhrase(getRandomPhrase(phrases));
    }, 700);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header title="Breaking Bad Quotes" variant="dark" />
      <LoadingOverlay
        active={cargando}
        backdrop={true}
        fullScreen={true}
        spinner={<Spinner image={logoWalt} size="lg" text="Cargando frase..." />}
      />
      <div className="mx-auto flex flex-col items-center">
        <div className="w-4/5 py-4">
          <header>
            <div
              className="flex items-center flex-col mx-auto gap-y-3
            text-center font-['Merriweather'] text-[2rem] text-[#144533] min-[600px]:text-[3rem]"
            >
              <div className="flex items-end justify-around">
                <div
                  className="w-40 
                  border 
                  flex
                  flex-col
                  border-[#00340d] 
                  bg-linear-to-br
                  from-[#133f33] to-[#005e1f]
                  px-2.5 font-sans
                  text-white 
                  text-[112px]"
                >
                  <div
                    className="text-[24px] 
                  text-shadow-[3px_1px_2px_#222] 
                  self-end leading-none"
                  >
                    36
                  </div>
                  <div className="leading-none">Br</div>
                </div>
                <span>eaking</span>
              </div>
              <div className="flex items-end justify-around">
                <div
                  className="w-40 
                  border 
                  flex
                  flex-col
                border-[#00340d] 
                  bg-linear-to-br
                 from-[#133f33] to-[#005e1f]
                  px-2.5 font-sans
                 text-white 
                   text-shadow-[3px_1px_2px_#222] 
                   text-[112px]"
                >
                  <div
                    className="text-[24px] 
                  text-shadow-[3px_1px_2px_#222] 
                  self-end leading-none"
                  >
                    52
                  </div>
                  <div className="leading-none">Ba</div>
                </div>
                <span>d</span>
              </div>
            </div>
          </header>
          <main className="py-2">
            <button
              className="cursor-pointer 
              border-2
              my-2
              border-[#e0ac3e]
              rounded-xl
              bg-transparent
              hover:text-[#0f4f42]
              hover:bg-[#cacaca]
              bg-size-[200px] p-2 text-[1.2rem] text-white transition-all duration-300 hover:bg-size-[400px]"
              onClick={getPhrase}
            >
              Get a Phrase
            </button>
            {phrase ? <Frase phrase={phrase} /> : null}
          </main>
        </div>
      </div>
      <Footer
        title="Breaking Bad Quotes"
        description="Generador de frases célebres de la serie Breaking Bad."
        variant="dark"
      />
    </div>
  );
}

export default App;
