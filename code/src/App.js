import React from 'react';
import data from './data.json';
import { Article } from './component/Article';

console.log(data);

export const App = () => {

	return (
		//react fragment <> </> which are transparent tags, bc you can only have 1 mother container.
		<>
			{/* the heading of the webpage */}
			<h1 className="heading">Latest albums & singles</h1>
			{/* added the container div w/ class name app-ui for styling */}
			<div className="app-ui">
				{data.albums.items.map((album) => {
					let index;
					const nameofArtist = album.artists.map((item, i) => {
						index = i;
						return item.name;
					}); //variable for getting the artists name from data.jason
					const artistLink = album.artists.map(
						(url) => url.external_urls.spotify
					); //variable for getting the artist url from data.jason

					return (
						<div className="album-card">
							<Article
								key={album.artists[0].id}
								albumCover={album.images[1].url} //sending the image link to the article component
								albumName={album.name} //sending the album name to the article component
								albumLink={album.external_urls.spotify} //sending the album url to the article component
								bandName={album.artists} //sending the name to the article component
								
								 //sending the link to the article component
							/>
						</div>
					);
				})}
			</div>
		</>
	);

};
