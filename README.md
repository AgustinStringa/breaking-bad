# Breaking Bad Quotes

Proyecto practico para consumir una API de frases de la serie Breaking Bad.

## Demo

[Ver la aplicacion desplegada](https://stri-app-brba-phrases.netlify.app/)

## Tecnologias y conceptos

- **React 17**: composicion de componentes, `useState` para el estado de carga y las frases, y `useEffect` para ejecutar la carga inicial.
- **Vite**: servidor de desarrollo rapido, build de produccion y acceso a variables de entorno mediante `import.meta.env`.
- **Tailwind CSS 4**: estilos utilitarios aplicados directamente en JSX, incluyendo responsive design, gradientes, estados hover y animaciones.
- **JavaScript con JSDoc**: el tipo `Phrase` documenta la forma esperada de cada frase (`quote`, `author` e `id`) y el service declara su retorno como `Promise<Phrase[]>`.
- **Vitest**: configurado para pruebas en entorno `jsdom`.

## Consumo de la API

La URL se configura en `.env`:

```env
VITE_PHRASES_API_URL=/api/breaking-bad/quotes
```

Durante el desarrollo, Vite redirige las peticiones `/api` al endpoint remoto mediante el proxy configurado en `vite.config.js`:

```text
https://api.mridul.tech/api/breaking-bad/quotes
```

El acceso a la API esta abstraido en `src/services/phraseService.js`. El service:

- centraliza el `fetch` y los headers;
- valida el estado HTTP de la respuesta;
- acepta respuestas en formato array o envueltas en la propiedad `data`;
- rechaza respuestas con una estructura invalida antes de actualizar el estado.

La aplicacion espera la resolucion de la promesa antes de guardar las frases y seleccionar la frase inicial. La seleccion aleatoria usa la posicion real del array, evitando confundir los identificadores de la API con indices de JavaScript.

## API

[Endpoint de frases de Breaking Bad](https://api.mridul.tech/api/breaking-bad/quotes)
