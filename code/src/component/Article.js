import React from 'react';

export const Article = (props) => {
	return (
		<article className="article" id={props.key}>
			<img
				className="album-cover"
				alt={props.albumCover}
				src={props.albumCover}
			/>
			<h2 className="album-name">{props.albumName}</h2>
			<h3 className="band-name">{props.bandName}</h3>
		</article>
	);
};
