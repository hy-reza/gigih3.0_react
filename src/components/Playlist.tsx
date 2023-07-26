import IPlaylist from "../Interfaces/IPlaylist";

const Playlist = ({picture, title, desc}: IPlaylist) => {
  return (
    <div className="item">
      <img src={picture} />
      <div className="play">
        <span className="fa fa-play" />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Playlist;
