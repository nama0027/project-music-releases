import React from 'react';
import data from './data.json';
import { Article } from './component/Article';
import { Artist } from './component/Artist';
import { Album } from './component/Album';

console.log(data);

export const App = () => {
	return data.albums.items.map((album) => {
		const nameofArtist = album.artists.map((item) => item.name);
		const artistLink = album.artists.map((url) => url.external_urls.spotify);
		console.log(artistLink);
		return (
			<div>
				<Article
					key={album.artists[0].id}
					albumCover={album.images[0].url}
					albumName={album.name}
					// bandName={album.artists}
				/>
				<Artist artistName={nameofArtist} artistUrl={artistLink} />
			</div>
		);
	});
};
