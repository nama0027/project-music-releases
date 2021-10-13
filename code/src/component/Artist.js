import React from 'react';

export const Artist = (props) => {
	console.log('i m here');

	return (
		<h2 className="artist-name">
			{' '}
			<a href="{props.artistUrl[0]}" className="artistUrl" target="_blank">
				{' '}
				{props.artistName}
			</a>
		</h2>
	);
};

/* On line 9 problem with the artist link. The link is not going to the page of the artist. We managed to get the links (we have confirmed this by console.log) and when we even tried with and youtube link that that works */
