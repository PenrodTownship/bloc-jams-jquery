{
  $('button#play-pause').on('click', function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;
/* this if statement below is broken; everything else works! */
/*    if (prevSongIndex = 0) { return; }*/

    const prevSong = album.songs[prevSongIndex];
    player.playPause(prevSong);
  });


}

/* in the first if statement, why >= instead of just = ? */

/* also, if const is a one-time use, why am I able to call the exact same variable again? */
