import React from 'react';

import { Artist } from './Artist'; //importing Artist.js component
import { Album } from './Album'; //importing Album.js component

//receiving props from the App.js
export const Article = (props) => {
	return (
		<article className="article" id={props.key}>
			<div className="image-container">

				<div className="overlay">
					<img className="heart-icon" src="./icons/heart.svg" />
					<img  className="play-icon" src="./icons/play.svg" />
					<img className="dot-icon" src="./icons/dots.svg" />
				</div>
				<img
					className="album-cover"
					alt={props.albumCover}
					src={props.albumCover}
				/>
			</div>
			<div>

				<Album
					className="album-name"
					albumTitle={props.albumName}
					albumUrl={props.albumLink}
				/>
			</div>
			<div>
				{props.bandName.map((item, index)=>{
					return(
						<Artist
						className="album-artist"
						artistName={item.name}
						artistUrl={item.external_urls.spotify}
						totalArtist={props.bandName.length}
						index= {index}
						/>
				)})}

			</div>
		</article>
	);
};
