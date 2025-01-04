
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa6";
import { wishActions } from "../store/WishslistSlice";


const HomeItem = ({ data = {}, type, searchTerm }) => {


    const dispatch = useDispatch();
  const whishitem = useSelector((store) => store.wish);
  // Check if there's a search term; if present, show the MusicSearch component
  if (searchTerm) {
    
  }

  // Define the default items array based on type
  let items = [];
  if (type === 'album') {
    items = Array.isArray(data.albums?.items) ? data.albums.items : [];
  } else if (type === 'playlist') {
    items = data.track_details ? Object.values(data.track_details) : [];
  } else if (type === 'artist') {
    items = Array.isArray(data.relatedArtists?.items) ? data.relatedArtists.items : [];
  } else if (type === 'podcast') {
    items = Array.isArray(data.episodes?.items) ? data.episodes.items : [];
  } else if (type === 'newRelease') {
    items = Array.isArray(data.new_releases) ? data.new_releases : [];
  }

  return (
    <div
      style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '1rem' }}
      className="scroll-container"
    >
      {items.map((item, index) => {



          const elementwhish = whishitem.indexOf(item.id) >= 0;
  
          const handlebags = () => {
            dispatch(wishActions.ADD_TO_WISHLIST(item.id));
          };
  
          const handleremoves = () => {
            dispatch(wishActions.REMOVE_FROM_WISHLIST(item.id));
          };
  
        let imageUrl, title, subTitle, description, link, artists;

        if (type === 'album') {
          imageUrl = item.images?.[0]?.url || 'https://via.placeholder.com/200';
          title = item.name || 'Unnamed Album';
          subTitle = item.album_type || 'Unknown Type';
          artists = item.artists?.map((artist) => artist.name).join(', ') || 'Unknown Artist';
          link = item.external_urls?.spotify;
        } else if (type === 'playlist') {
          imageUrl = item.thumb || 'https://via.placeholder.com/200';
          title = item.song_name || 'Unnamed Track';
          subTitle = item.artist || 'Unknown Artist';
          description = `Duration: ${item.duration || 'Unknown'}`;
          link = item.link;
        } else if (type === 'artist') {
          imageUrl = item.visuals?.avatar?.[0]?.url || 'https://via.placeholder.com/100';
          title = item.name || 'Unnamed Artist';
          link = item.shareUrl;
        } else if (type === 'podcast') {
          imageUrl = item.cover?.[0]?.url || 'https://via.placeholder.com/150';
          title = item.name || 'Unnamed Episode';
          description = item.description || 'No description available';
          subTitle = `Duration: ${item.durationText || '--:--'}`;
          link = item.audioPreviewUrl;
        } else if (type === 'newRelease') {
          imageUrl = item.images?.[0]?.url || 'https://via.placeholder.com/150';
          title = item.name || 'Untitled Album';
          subTitle = item.artists?.map((artist) => artist.name).join(', ') || 'Unknown Artist';
          link = item.external_urls?.spotify;
        }

        return type === 'artist' ? (
          <a
            key={item.id || index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginRight: '1rem',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/100'; // Fallback for broken images
              }}
            />
            <p
              style={{
                fontSize: '0.8rem',
                color: 'white',
                marginTop: '0.5rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '100px',
              }}
            >
              {title}
            </p>
          </a>
        ) : (
          <div
            key={item.id || index}
            className="card"
            style={{
              display: 'inline-block',
              width: '200px',
              marginRight: '1rem',
              verticalAlign: 'top',
              textAlign: 'center',
              backgroundColor: '#2c2c2c',
              padding: '1rem',
              borderRadius: '8px',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s', // Hover effect
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)'; // Slight zoom effect
              e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)'; // Enhance shadow
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'; // Reset zoom effect
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Reset shadow
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150'; // Fallback for broken images
              }}
            />
            <h5
              style={{
                fontSize: '1rem',
                margin: '0.5rem 0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '200px',
              }}
            >
              {title}
            </h5>
            {subTitle && (
              <p style={{ fontSize: '0.9rem', color: '#aaa', margin: '0.5rem 0' }}>{subTitle}</p>
            )}
            {description && <p style={{ fontSize: '0.9rem', color: '#666' }}>{description}</p>}
            {artists && <p style={{ fontSize: '0.9rem', color: '#666' }}>{artists}</p>}


 {/* Like/Unlike button */}
          {elementwhish ? (
              <button
                className="btn btn-outline-warning border border-0"
                onClick={handleremoves}
              >
                <FcLike />
              </button>
            ) : (
              <button
                onClick={handlebags}
                className="btn btn-outline-success border border-0"
              >
                <FaRegHeart />
              </button>
            )}

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.9rem',
                  color: '#fff',
                  textDecoration: 'none',
                  backgroundColor: '#1DB954', // Spotify Green
                  padding: '0.5rem 1rem',
                  borderRadius: '25px',
                  display: 'inline-block',
                  marginTop: '0.5rem',
                }}
              >
                View on Spotify
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HomeItem;



