import React, { useState } from 'react';
import "../css/index.css";
import Video from './videoInicial';
import Historia from './nossaHistoria';
import Galeria from './galeria';
import GaleriaVideos from './galeriaVideos';


function Menu() {
    const [secaoAtual, setSecaoAtual] = useState('menu');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <div>
            {secaoAtual === 'menu' && (
                <div className="ContainerP4">
                    <div className="text-intro4">
                        <h1> Escolha 💖 </h1>
                        <div className="buttons-menu">
                        <button className="buttonMenu" onClick={() => cliqueSecao('nossaHistoria')}> Nossa História "Minha Versão" </button> <br></br>
                        <button className="buttonMenu" onClick={() => cliqueSecao('galeria')}> Galeria de fotos </button> <br></br>
                        <button className="buttonMenu" onClick={() => cliqueSecao('galeriaVideos')}> Galeria de videos </button><br></br>
                        <button className="buttonMenuVoltar" onClick={() => cliqueSecao('videoInicial')}> Voltar </button>
                        </div>
                    </div>
                </div>
            )}
           
            <div className='secao'>
                {secaoAtual === 'nossaHistoria' && <Historia />}
            </div>

            <div className='secao'>
                {secaoAtual === 'galeria' && <Galeria />}
            </div> 

            <div className='secao'>
                {secaoAtual === 'galeriaVideos' && <GaleriaVideos />}
            </div>


            <div className='secao'>
                {secaoAtual === 'videoInicial' && <Video />}
            </div>
        </div>
    );
}

export default Menu;

