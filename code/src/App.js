import React from 'react';
import data from './data.json';
import { Article } from './component/Article';

console.log(data);

export const App = () => {
	return data.albums.items.map((album) => {
		return (
			<div>
				<Article
					key={album.artists[0].id}
					albumCover={album.images[0].url}
					albumName={album.name}
					bandName={album.artists[0].name}
				/>
			</div>
		);
	});
};
