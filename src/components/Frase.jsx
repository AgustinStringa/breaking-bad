import React, { useState } from "react";
import PropTypes from "prop-types";

const Frase = ({ phrase: { quote, author } }) => {
  const [copiado, setCopiado] = useState(false);

  const handleCopiar = () => {
    const texto = `"${quote}" — ${author}`;
    navigator.clipboard?.writeText(texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="relative mt-8 w-full overflow-hidden rounded-2xl border border-emerald-900/60 bg-slate-900/90 p-6 shadow-2xl shadow-emerald-950/40 backdrop-blur-md transition-all sm:p-8">
      {/* Decorative background chemical glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Decorative Quote Mark */}
      <div className="mb-4 flex items-center justify-between">
        <svg
          className="h-8 w-8 text-amber-500/80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <button
          type="button"
          onClick={handleCopiar}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:border-emerald-600 hover:bg-slate-700 active:scale-95"
          title="Copiar frase al portapapeles"
        >
          {copiado ? (
            <>
              <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-emerald-400">¡Copiado!</span>
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copiar frase</span>
            </>
          )}
        </button>
      </div>

      <blockquote className="space-y-4">
        <p className="text-xl font-bold leading-relaxed tracking-tight text-white sm:text-2xl">
          "{quote}"
        </p>
        <footer className="flex items-center justify-end gap-2 pt-2">
          <span className="h-0.5 w-6 bg-amber-500/60" />
          <cite className="not-italic text-base font-bold text-amber-400">
            {author}
          </cite>
        </footer>
      </blockquote>
    </div>
  );
};

Frase.propTypes = {
  phrase: PropTypes.object.isRequired,
};

export default Frase;
