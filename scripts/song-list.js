// edited line 15: wrapped (song.duration) with helper.prettyTime post checkpoint 6.11

{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${helper.prettyTime(song.duration)}</td>
      </tr>
    `);

    song.element.on('click', event => {
// 2.4.d was player.playPause(song);
      helper.playPauseAndUpdate(song);
      $('button#play-pause').attr('playState', player.playState);
    });

    $('#song-list').append(song.element);
  });
}
