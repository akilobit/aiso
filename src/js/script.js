const processTracks = items => {
	const tracks = document.querySelector('.tracks');
	tracks.innerHTML = "";
	const html = items.map(item => {
		let url = 'https://soundcloud.com/aiso/' + item.url
		let track = `<div class="track">
			<a rel="noopener nofollow" href="${item.url}" target="_blank" aria-label="${item.title}"><img alt="${item.title}" sizes="(max-width: 500px) 500px, 300px" src="/images/cover/cover-${item.cover}-300x300.jpg" srcset="/images/cover/cover-${item.cover}.jpg 500w, /images/cover/cover-${item.cover}-300x300.jpg 300w" loading="lazy"></a>
			<p class="date">${item.date}</p>
			<p class="tags">${item.tags.join(', ')}</p>
			<h3><a rel="noopener nofollow" href="${url}" target="_blank" aria-label="${item.title}">${item.title}</a></h3>
		</div>`
		return track
	}).join('');
	tracks.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', (e) => {
	fetch('/js/tracks.json')
	.then(response => response.json())
	.then(data => {
		processTracks(data.tracks)
	});
});
