// new line post checkpoint 6.11
$( document ).ready(function ()

{
    $('button#play-pause').on('click', function(){
// was player.playPause();
      helper.playPauseAndUpdate();
      $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', function() {
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= album.songs.length) { return; }

      const nextSong = album.songs[nextSongIndex];
// was player.playPause(nextSong);
      helper.playPauseAndUpdate(nextSong);
    });

    $('button#previous').on('click', function() {
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const prevSongIndex = currentSongIndex - 1;
      if (prevSongIndex < 0) { return; }

      const prevSong = album.songs[prevSongIndex];
// was player.playPause(prevSong);
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
// was ... .text( currentTime ) ... wrapped it with ( player.prettyTime );
      $('#time-control .current-time').text( player.prettyTime(currentTime) );
      $('#time-control input').val(percent);
// new line post checkpoint 6.11
      $('#time-control .total-time').text( player.prettyTime(duration));
    }, 1000);

// new codeblock post checkpoint 6.11
    $('#volume-control input').on('input', function (event) {
      player.setVolume(event.target.value);
    });

  }
)
