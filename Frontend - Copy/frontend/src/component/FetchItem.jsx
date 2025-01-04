

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Add useSelector
import { itemsActions } from "../store/ItemSlice"; 
import { fetchaction } from "../store/FetchStatus";

const FetchItem = () => {
  const [isdata, setdata] = useState([]);
  const dispatch = useDispatch();

  // Access fetchStatus from the Redux store
  const fetchStatus = useSelector((state) => state.fetchstates);

  // Sequentially fetch all data
  const fetchDataSequentially = async () => {
    try {
      dispatch(fetchaction.markfetching()); // Start fetching status
      
      // Fetch playlist data
      const playlistResponse = await fetch(
        'https://spotify117.p.rapidapi.com/spotify_playlist/?url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F3nS8d7ekVjFLM4jVyqbDGY',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '6805479f88msh703adf83029f07cp167936jsn4a9e0b323c22',
            'x-rapidapi-host': 'spotify117.p.rapidapi.com'
          }
        }
      );
      const playlistData = await playlistResponse.json();
      // console.log("Playlist:", playlistData);
      dispatch(itemsActions.addInitialItemsplaylist(playlistData));

      // Fetch artist data
      const artistResponse = await fetch(
        'https://spotify-scraper.p.rapidapi.com/v1/artist/related?artistId=2uFUBdaVGtyMqckSeCl0Qj',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '6805479f88msh703adf83029f07cp167936jsn4a9e0b323c22',
            'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
          }
        
        }
      );
      const artistData = await artistResponse.json();
      // console.log("Artist:", artistData);
      dispatch(itemsActions.addInitialItemsartist(artistData));

      // Fetch album data
      const albumResponse = await fetch(
        'https://spotify117.p.rapidapi.com/new_releases/?country=in',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '6805479f88msh703adf83029f07cp167936jsn4a9e0b323c22',
            'x-rapidapi-host': 'spotify117.p.rapidapi.com'
          }
        }
      );
      const albumData = await albumResponse.json();
      // console.log("Album:", albumData);
      dispatch(itemsActions.addInitialItemsalbume(albumData));

      // Fetch podcast data
      const podcastResponse = await fetch(
        'https://spotify-scraper.p.rapidapi.com/v1/podcast/episodes?showId=4oTBzqC3DHbaKNFq2YXpQw',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '6805479f88msh703adf83029f07cp167936jsn4a9e0b323c22',
            'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
          }
        },
        
      );
      const podcastData = await podcastResponse.json();
      // console.log("Podcast:", podcastData);
      dispatch(itemsActions.addInitialItemspodcast(podcastData));

      // Fetch recommendations
  //     const recommendationResponse = await fetch(
  //       // 'https://spotify-scraper2.p.rapidapi.com/new_releases?limit=10&country=US&offset=0',
  //       'https://cors-anywhere.herokuapp.com/https://spotify-scraper2.p.rapidapi.com/new_releases?limit=10&country=US&offset=0',
  //       {
  //         method: 'GET',
	// headers: {
	// 	'x-rapidapi-key': '6805479f88msh703adf83029f07cp167936jsn4a9e0b323c22',
	// 	'x-rapidapi-host': 'spotify-scraper2.p.rapidapi.com'
	// }
  //       }
  //     );
  //     const recommendationData = await recommendationResponse.json();
  //     console.log("Recommendations:", recommendationData);
  //     dispatch(itemsActions.addInitialrecomendation(recommendationData));
      // dispatch(fetchaction.markfetchDone());
      




      const recommendationResponse = await fetch(
        'http://localhost:9091/api/new_releases',
        {
          method: 'GET',
        }
      );
      const recommendationData = await recommendationResponse.json();
      // console.log("Recommendations:", recommendationData);
      dispatch(itemsActions.addInitialrecomendation(recommendationData));
      

      // Mark fetch as done
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(fetchaction.markfetchingfinished()); // Mark fetch finished in case of error
    }

  };

  useEffect(() => {
    fetchDataSequentially();
  }, []);

  return (
    <div>
      {/* <h1>Fetch Data</h1>
      <p>
        Fetching status:{" "}
        {fetchStatus.currentlyfetching
          ? "Loading..."
          : fetchStatus.fetchDone
          ? "Done"
          : "Idle"}
      </p> */}
    </div>
  );
};

export default FetchItem;
