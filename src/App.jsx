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
    if (!phraseList || !phraseList.length) {
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
      } catch (err) {
        console.error("Error al cargar frases:", err);
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
    }, 500);
  };

  return (
    <div className="flex min-h-dvh flex-col justify-between bg-slate-950 text-slate-100">
      <Header title="Breaking Bad Quotes" theme="breakingBad" />

      <LoadingOverlay
        active={cargando}
        backdrop={true}
        fullScreen={true}
        spinner={<Spinner image={logoWalt} size="lg" text="Cargando frase..." />}
      />

      <div className="min-h-full w-full flex-1 px-4 py-8 sm:py-12">
        <main className="mx-auto w-full max-w-2xl">
          {/* Logo Químico Icónico */}
          <header className="mb-8 flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-4xl font-extrabold tracking-wider text-slate-100 sm:text-5xl">
              {/* Elemento 35: Br (Bromo) */}
              <div className="flex items-center gap-1">
                <div className="flex h-20 w-20 flex-col justify-between rounded-xl border-2 border-emerald-500/80 bg-gradient-to-br from-emerald-900 to-emerald-950 p-2 shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-500/20">
                  <span className="text-right text-[11px] font-bold text-emerald-300">35</span>
                  <span className="text-center text-3xl font-black text-white">Br</span>
                  <span className="text-[9px] font-medium text-emerald-400">79.90</span>
                </div>
                <span className="text-3xl font-extrabold tracking-normal text-slate-200 sm:text-4xl">
                  eaking
                </span>
              </div>

              {/* Elemento 56: Ba (Bario) */}
              <div className="flex items-center gap-1">
                <div className="flex h-20 w-20 flex-col justify-between rounded-xl border-2 border-emerald-500/80 bg-gradient-to-br from-emerald-900 to-emerald-950 p-2 shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-500/20">
                  <span className="text-right text-[11px] font-bold text-emerald-300">56</span>
                  <span className="text-center text-3xl font-black text-white">Ba</span>
                  <span className="text-[9px] font-medium text-emerald-400">137.3</span>
                </div>
                <span className="text-3xl font-extrabold tracking-normal text-slate-200 sm:text-4xl">
                  d
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
              Citas icónicas del universo de Heisenberg
            </p>
          </header>

          {/* Botón CTA y Generador de Frase */}
          <div className="flex flex-col items-center">
            <button
              onClick={getPhrase}
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-950/50 transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:from-amber-500 hover:to-amber-600 hover:shadow-amber-500/25 active:translate-y-0"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Get a Phrase</span>
            </button>

            {phrase && <Frase phrase={phrase} />}
          </div>
        </main>
      </div>

      <Footer
        title="Breaking Bad Quotes"
        description="Generador de frases célebres de la serie Breaking Bad."
        theme="breakingBad"
      />
    </div>
  );
}

export default App;
