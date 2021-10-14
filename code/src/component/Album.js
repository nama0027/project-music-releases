import React from 'react';



//receiving props from the Article.js
export const Album = (props) => {
	//rendering album url and album name in this component
	return (
		<a className="album-url" href={props.albumUrl} target="_blank">
			<p className="album-name">{props.albumTitle}</p>
		</a>
	);
};

