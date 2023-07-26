import IPlaylist from "../Interfaces/IPlaylist";
import Playlist from "./Playlist";

type Props = {
  grupTitle: string;
  playlistData: IPlaylist[];
};

const Playlists = ({ grupTitle, playlistData }: Props) => {
  return (
    <div className="spotify-playlists">
      <h2>{grupTitle}</h2>
      <div className="list">
        {playlistData.map((p) => (
          <Playlist picture={p.picture} title={p.title} desc={p.desc}/>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
