// 2.4.a
class Helper {
  // 2.4.d

  prettyTime (timeInSeconds) {
    const min = Math.floor( timeInSeconds / 60);
    const sec = Math.floor( timeInSeconds - min * 60);
    return `${min}:${sec}`;
  }

  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(this.prettyTime(totalTime));
  }
};

// 2.4.b
const helper = new Helper();
