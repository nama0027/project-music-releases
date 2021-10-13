import React from 'react';
import { Artist } from './Artist'; //importing Artist.js component
import { Album } from './Album'; //importing Album.js component

//receiving props from the App.js
export const Article = (props) => {
	return (
		<article className="article" id={props.key}>
			<div className="image-container">
				<div className="overlay">
					<img src="./icons/heart.svg" />
					<img class="thumbnail" className="play-icon" src="./icons/play.svg" />
					<img src="./icons/dots.svg" />
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
				<Artist artistName={props.bandName} artistUrl={props.bandUrl} />
			</div>
		</article>
	);
};
