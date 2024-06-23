import React from 'react';
import YouTube from 'react-youtube';

class VideoPlayer extends React.Component {
  onReady(event) {
    // Reproduz o vídeo quando estiver pronto
    event.target.playVideo();
  }

  render() {
    // Opções para o reprodutor de vídeo do YouTube
    const opts = {
      height: '300',
      width: '300',
      playerVars: {
        autoplay: 4, // Reproduz automaticamente o vídeo
        loop: 1, // Repete o vídeo automaticamente
        controls: 0, // Desativa os controles do YouTube
        rel: 0, // Impede que vídeos relacionados sejam exibidos ao final
      },
    };

    return (
      <YouTube videoId="ObmWIkqsxvw" opts={opts} onReady={this.onReady} />
    );
  }
}

export default VideoPlayer;

