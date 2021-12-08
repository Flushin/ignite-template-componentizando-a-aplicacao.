import { MovieCard } from './MovieCard'; 
import '../styles/content.scss';
 
 interface SelectedGenreProps {
    selectedGenre: {
      title: string;
    }
  }

  interface MoviesProps {
    movies: {
      Title: string;
      imdbID: string;
      Poster: string;
      Ratings: Array<{
        Source: string;
        Value: string;
      }>;
      Runtime: string;
    }[]
  }

export function Content(props: MoviesProps & SelectedGenreProps) {
  // Complete aqui

    return (
      <div className="container">
          <header>
            <span className="category">Categoria:<span> {props.selectedGenre?.title}</span></span>
          </header>

          <main>
            <div className="movies-list">
              {props.movies?.map(movie => (
                <MovieCard key ={movie?.imdbID} title={movie?.Title} poster={movie?.Poster} runtime={movie?.Runtime} rating={movie?.Ratings[0].Value} />
              ))}
            </div>
          </main>
      </div>
    );
  
}