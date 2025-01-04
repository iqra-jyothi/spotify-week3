



import React from 'react';
import { useSelector } from 'react-redux';
import HomeItem from '../component/HomeItem';
import Podcast from '../component/Podcast';

const Home = () => {
  // Select data from Redux store
  const playlists = useSelector((state) => state.items.playlists || []);
  const albums = useSelector((state) => state.items.albums || []);
  const artists = useSelector((state) => state.items.artists || []);
  const podcast = useSelector((state) => state.items.podcast || []);
  const recommended = useSelector((state) => state.items.Recommended || []);

  return (
    <main className="p-3">
      {/* Playlists Section */}
      
      <section className="mt-4">
        <h5>Podcast</h5>
        <HomeItem data={podcast} type="podcast" />
      </section>

      {/* Albums Section */}
      <section className="mt-4">
        <h5>Recommended Albums</h5>
        <HomeItem data={albums} type="album" />
      </section>

      {/* Artists Section */}
      <section className="mt-4">
        <h5>Artists</h5>
        <HomeItem data={artists} type="artist" />
      </section>

      {/* Podcast Section */}
    
      {/* <section className="mt-4">
        <h5>Podcast</h5>
        <Podcast data={podcast} type="podcast" />
      </section> */}
<section>
        <h5>Playlists</h5>
        <HomeItem data={playlists} type="playlist" />
      </section>
      {/* New Releases Section */}
      <section className="mt-4">
        <h5>New Releases</h5>
        <HomeItem data={recommended} type="newRelease" />
      </section>
    </main>
  );
};

export default Home;






// import React from "react";
// import { useSelector } from "react-redux";
// import HomeItem from "../component/HomeItem";
// import Podcast from "../component/Podcast";

// const Home = () => {
//   // Select data and category from Redux store
//   const playlists = useSelector((state) => state.items.playlists || []);
//   const albums = useSelector((state) => state.items.albums || []);
//   const artists = useSelector((state) => state.items.artists || []);
//   const podcasts = useSelector((state) => state.items.podcast || []);
//   const recommended = useSelector((state) => state.items.Recommended || []);
//   const selectedCategory = useSelector((state) => state.category.category);

//   const getCategoryData = () => {
//     switch (selectedCategory) {
//       case "Podcast":
//         return <Podcast data={{ episodes: podcasts }} />;
//       case "Music":
//         return (
//           <>
//             <section>
//               <h5>Playlists</h5>
//               <HomeItem data={playlists} type="playlist" />
//             </section>
//             <section>
//               <h5>Recommended Albums</h5>
//               <HomeItem data={albums} type="album" />
//             </section>
//           </>
//         );
//       case "All":
//       default:
//         return (
//           <>
//             <section>
//               <h5>Playlists</h5>
//               <HomeItem data={playlists} type="playlist" />
//             </section>
//             <section className="mt-4">
//               <h5>Recommended Albums</h5>
//               <HomeItem data={albums} type="album" />
//             </section>
//             <section className="mt-4">
//               <h5>Artists</h5>
//               <HomeItem data={artists} type="artist" />
//             </section>
//             <section className="mt-4">
//               <h5>Podcast</h5>
//               <Podcast data={podcasts} />
//             </section>
//             <section className="mt-4">
//               <h5>New Releases</h5>
//               <HomeItem data={recommended} type="newRelease" />
//             </section>
//           </>
//         );
//     }
//   };

//   return <main className="p-3">{getCategoryData()}</main>;
// };

// export default Home;
