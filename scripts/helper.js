class Helper {
  playPauseAndUpdate (song) {
    this.updateTime ();
  }
  updateTime () {
    setTimeout (() => {
      $('.total-time').text( player.prettyTime(player.getDuration() ));
    },10)
  }
}

const helper = new Helper ();
