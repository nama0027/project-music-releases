import React from 'react';
// import { Artist } from './Artist';
// import { Album } from './Album';

export const Article = (props) => {
	return (
		<article className="article" id={props.key}>
			<img
				className="album-cover"
				alt={props.albumCover}
				src={props.albumCover}
			/>
			<h2 className="album-name">{props.albumName}</h2>
		</article>
	);
};
