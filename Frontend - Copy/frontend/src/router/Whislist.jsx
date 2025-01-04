

import React from 'react';
import { useSelector } from 'react-redux';
import WhishItem from '../component/WhishItem';

const Whislist = () => {
  const bagitem = useSelector((state) => state.wish || []);
// console.log(bagitem,"they are");
  // Fetching data from the Redux store
  const playlists = useSelector((state) => state.items.playlists?.items || []);
// console.log(playlists,"they are  playlists");
  const albums = useSelector((state) => state.items.albums?.items || []);
  // console.log(albums, "they area albums");
  const podcast = useSelector((state) => state.items.podcast?.episodes?.items || []);
  // console.log(podcast, "they are podcast");
  const recommended = useSelector((state) => state.items.Recommended || []);
  // console.log(recommended,"they are recommended");
  // console.log(bagitem, "the items in the wishlist");

  // Filtering items based on wishlist IDs
  const finalplaylist = Array.isArray(playlists) ? playlists.filter((item) => bagitem.includes(item.id)) : [];

  const finalalbum = Array.isArray(albums) ? albums.filter((item) => bagitem.includes(item.id)) : [];
  // console.log(finalalbum, "the final album items");
  const finalpodcast = Array.isArray(podcast) ? podcast.filter((item) => bagitem.includes(item.id)) : [];
  // console.log(finalpodcast, "the final podcast items");
  const finalrecomended = Array.isArray(recommended) ? recommended.filter((item) => bagitem.includes(item.id)) : [];
  // console.log(finalrecomended, "the final recomend items");

  return (
    <main style={{ padding: '1rem' }}>
      <h2>FAVORITE SONG</h2>

      <div className="wishlist-items-container">
        {/* Playlists */}
        <section>
          {/* <h5>Playlists</h5> */}
          {finalplaylist.length > 0 ? (
            <WhishItem data={finalplaylist} type="playlist" />
          ) : (
            <p></p>
          )}
        </section>

        {/* Albums */}
        <section>
          {/* <h5>Albums</h5> */}
          {finalalbum.length > 0 ? (
            <WhishItem data={finalalbum} type="album" />
          ) : (
            <p></p>
          )}
        </section>

        {/* Podcasts */}
        <section>
          <h5>Podcasts</h5>
          {finalpodcast.length > 0 ? (
            <WhishItem data={finalpodcast} type="podcast" />
          ) : (
            <p></p>
          )}
        </section>

        {/* Recommended */}
        <section>
          {/* <h5>Recommended</h5> */}
          {finalrecomended.length > 0 ? (
            <WhishItem data={finalrecomended} type="recommended" />
          ) : (
            <p></p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Whislist;


