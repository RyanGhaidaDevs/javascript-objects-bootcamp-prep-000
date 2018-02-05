

var playlist = {};
var updatePlaylist = {playlist, artistName, songTitle};
var removeFromPlaylist = {playlist, artistName};

function updatePlaylist (playlist, artistName, songTitle){
// add the song and artist as a key-value pair to the playlist
playlist.artistName = 'songTitle';
return playlist
}


function removeFromPlaylist (playlist, artistName){
  // delete the key-value pair from the playlist and return the updated playlist
delete playlist.artistName;
return playlist
}
