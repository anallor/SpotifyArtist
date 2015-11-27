

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
		var artistImages = artist.images[0].url;

		var html = [
			'<div>'+artistName+'</div>',
			'<div><a class="image"><img width="250" src="'+artistImages+'"></a></div>',
		].join('\n');

		$('.container').append(html);
	});
};

$(document).on('click', '.image',function() {
	searchAlbum(artist)
});


function searchAlbum (artist) {
	$.ajax({
		url: 'https://api.spotify.com/v1/search?type=album&query=' + artist,
		success: findedAlbums,
		error: function() {
			console.log('Error')
		},
		dataType: 'json'
	});
};

function findedAlbums(albums) {
	albums['albums']['items'].forEach(function displayAlbums (albums) {
		var albumName = album.name;
		var html = ['<div style="text-align: left">'+artistName+'</div>',].join('\n');
		$('.album_container').append(html);

	});
};
