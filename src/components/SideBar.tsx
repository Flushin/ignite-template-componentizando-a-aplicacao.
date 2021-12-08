import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenresProps {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[]
}

interface SelectedGenreProps{
  selectedGenre: {
    id: number;
  };
}

interface HandleClickButtonProps {
  handleClickButton: (id: number) => void
}

export function SideBar(props: GenresProps & SelectedGenreProps & HandleClickButtonProps) {
  // Complete aqui
  return(
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <nav className="sidebar">
          <span>Watch<p>Me</p></span>

          <div className="buttons-container">
            {props.genres?.map(genre => (
              <Button
                key={String(genre?.id)}
                title={genre?.title}
                iconName={genre?.name}
                onClick={() => props.handleClickButton(genre?.id)}
                selected={props.selectedGenre.id === genre?.id}
              />
            ))}
          </div>

        </nav>
      </div>
    )
}