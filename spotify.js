

$('button').on('click', function() {
var query = $('.artist').val();
	searchArtist(query);
});

function searchArtist(query) {
	$.ajax({
		url: 'https://api.spotify.com/v1/search?type=artist&query=' + query,
		success: findedArtists,
		error: function() {
			console.log('Error')
		},
		dataType: 'json'
	});
};


function findedArtists(artists) {
	artists['artists']['items'].forEach(function displayArtist (artist) {
		var artistName = artist.name;
		var artistImages = artist.images[1]['url'];

		var html = [
			'<div style="text-align: left">'+artistName+'</div>',
			'<div style="text-align: left"><img width="250" src="'+artistImages+'"></div>',
		].join('\n');

		$('.container').append(html);
	});
};
