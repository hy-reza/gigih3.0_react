import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Playlists, Preview, Sidebar, Topbar } from "./components";


function App() {
  const data =[
    {
      grupTitle: "Daily Mix",
      playlistData: [
        {
          picture: "https://picsum.photos/id/1/500/300",
          title: "Today's Top Hits",
          desc: "Rema & Selena Gomez are on top of the charts."
        },
        {
          picture: "https://picsum.photos/id/2/500/300",
          title: "RapCaviar",
          desc: "New Music from Lil Baby, Juice WRLD and more."
        },
        {
          picture: "https://picsum.photos/id/3/500/300",
          title: "All out 2010s",
          desc: "The biggest songs of the 2010s."
        },
        {
          picture: "https://picsum.photos/id/4/500/300",
          title: "Global Top 50",
          desc: "What the world is listening to right now."
        },
        {
          picture: "https://picsum.photos/id/5/500/300",
          title: "Hip Hop Controller",
          desc: "The tracks that control hip hop."
        },
        {
          picture: "https://picsum.photos/id/6/500/300",
          title: "Hot Country",
          desc: "Today's top country hits."
        },
        {
          picture: "https://picsum.photos/id/7/500/300",
          title: "Billboard Hot 100",
          desc: "The most popular songs in the U.S. right now."
        },
        {
          picture: "https://picsum.photos/id/8/500/300",
          title: "Viral Hits",
          desc: "The most-played songs with the fastest growth."
        },
        {
          picture: "https://picsum.photos/id/9/500/300",
          title: "Pop Rising",
          desc: "The hottest new pop songs."
        },
        {
          picture: "https://picsum.photos/id/10/500/300",
          title: "Indie Mixtape",
          desc: "The biggest and best from Indie's finest."
        }
      ]
    },
    {
      grupTitle: "Spotify Playlists",
      playlistData: [
        {
          picture: "https://picsum.photos/id/11/500/300",
          title: "Rock Classics",
          desc: "Rock Legends & epic songs that continue to inspire."
        },
        {
          picture: "https://picsum.photos/id/12/500/300",
          title: "Alternative 90s",
          desc: "The best grunge and alternative rock of the 90s."
        },
        {
          picture: "https://picsum.photos/id/13/500/300",
          title: "Metal Essentials",
          desc: "From Black Sabbath to Iron Maiden - the essentials of heavy metal."
        },
        {
          picture: "https://picsum.photos/id/14/500/300",
          title: "80s Rock Anthems",
          desc: "The biggest and boldest anthems from the 80s."
        },
        {
          picture: "https://picsum.photos/id/15/500/300",
          title: "70s Rock Anthems",
          desc: "The biggest and boldest anthems from the 70s."
        },
        {
          picture: "https://picsum.photos/id/16/500/300",
          title: "60s Rock Anthems",
          desc: "The biggest and boldest anthems from the 60s."
        },
        {
          picture: "https://picsum.photos/id/17/500/300",
          title: "50s Rock Anthems",
          desc: "The biggest and boldest anthems from the 50s."
        },
        {
          picture: "https://picsum.photos/id/18/500/300",
          title: "90s Rock Anthems",
          desc: "The biggest and boldest anthems from the 90s."
        },
        {
          picture: "https://picsum.photos/id/19/500/300",
          title: "Y2K Rock Anthems",
          desc: "The biggest and boldest anthems from the turn of the millennium."
        },
        {
          picture: "https://picsum.photos/id/20/500/300",
          title: "Classic Metal",
          desc: "The roots of all metal music."
        }
      ]
    },
    {
      grupTitle: "Chilled Out",
      playlistData: [
        {
          picture: "https://picsum.photos/id/21/500/300",
          title: "Chill Hits",
          desc: "Kick back to the best new and recent chill tunes."
        },
        {
          picture: "https://picsum.photos/id/22/500/300",
          title: "Indie Chill",
          desc: "Indie tracks perfect for winding down."
        },
        {
          picture: "https://picsum.photos/id/23/500/300",
          title: "Sleep",
          desc: "Music to help you wind down and make you fall asleep."
        },
        {
          picture: "https://picsum.photos/id/24/500/300",
          title: "Acoustic Hits",
          desc: "The best acoustic hits."
        },
        {
          picture: "https://picsum.photos/id/25/500/300",
          title: "Peaceful Piano",
          desc: "Relax and indulge with beautiful piano pieces."
        },
        {
          picture: "https://picsum.photos/id/26/500/300",
          title: "Focus Flow",
          desc: "Music to help you concentrate and stay in the zone."
        },
        {
          picture: "https://picsum.photos/id/27/500/300",
          title: "Lo-Fi Beats",
          desc: "Beats to relax, study and focus."
        },
        {
          picture: "https://picsum.photos/id/28/500/300",
          title: "Meditative Mind",
          desc: "Music to help you meditate and find inner peace."
        },
        {
          picture: "https://picsum.photos/id/29/500/300",
          title: "Deep Sleep",
          desc: "Soothing sounds to help you sleep."
        },
        {
          picture: "https://picsum.photos/id/30/500/300",
          title: "Relax & Unwind",
          desc: "Music to help you relax and unwind."
        }
      ]
    }
  ]
  

  return (
    <>
      <Sidebar />
      <main className="main-container">
        <Topbar />
        {data.map((d) => (
          <Playlists grupTitle={d.grupTitle} playlistData={d.playlistData} />
        ))}
        <Preview />
      </main>
    </>
  );
}

export default App;
