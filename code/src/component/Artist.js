import React from 'react';

//receiving props from the Article.js
export const Artist = (props) => {
	//rendering artist url and name for each album in this component
	return (
		<p className="artist-name">
			{' '}
			<a href={props.artistUrl[0]} className="artistUrl" target="_blank">
				{' '}
				{props.artistName}
			</a>
		</p>
	);
};
