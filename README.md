# esame-frontend2-dimofte

Prova di fine modulo di Frontend 2: app in React + TypeScript che mostra i film di "The Lord of the Rings" presi dalle API di TMDB.

Le pagine sono due e usano la stessa Shell:

- `/` elenco dei film
- `/movies/:id` dettaglio di un film

## Come avviare il progetto

1. Installare le dipendenze:

```
npm install
```

2. Creare un file `.env` nella cartella principale con la chiave personale TMDB:

```
VITE_API_KEY=chiave_tmdb
VITE_API_URL=https://api.themoviedb.org/3
```

3. Avviare l'app:

```
npm run dev
```

## Struttura

- `src/components/`: Header, Shell, MovieCard, Poster
- `src/MovieListPage.tsx` e `src/MovieDetailPage.tsx`: le due pagine
- `src/types.ts`: i types dei dati e delle props
- `traccia/`: traccia, wireframe e scheda componente M9
