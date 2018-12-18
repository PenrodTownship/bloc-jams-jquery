
{
    $('button#play-pause').on('click', function() {
// 2.4.d was player.playPause();
      helper.playPauseAndUpdate();
      $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', function() {
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= album.songs.length) { return; }

      const nextSong = album.songs[nextSongIndex];
// 2.4.d was player.playPause(nextSong);
      helper.playPauseAndUpdate(nextSong);
    });

    $('button#previous').on('click', function() {
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const prevSongIndex = currentSongIndex - 1;
      if (prevSongIndex < 0) { return; }

      const prevSong = album.songs[prevSongIndex];
// 2.4.d was player.playPause(prevSong);
      helper.playPauseAndUpdate(prevSong);
    });

    $('#time-control input').on('input', function (event) {
      player.skipTo(event.target.value);
    });

    setInterval( () => {
      if (player.playState !== 'playing') { return; }
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
// was ... .text( currentTime ) ... wrapped it with ( helper.prettyTime ); - CORRECT
      $('#time-control .current-time').text( helper.prettyTime(currentTime) );
      $('#time-control input').val(percent);
    }, 1000);

// 1 new codeblock post checkpoint 6.11 - CORRECT
    $('#volume-control input').on('input', function (event) {
      player.setVolume(event.target.value);
    });

}
