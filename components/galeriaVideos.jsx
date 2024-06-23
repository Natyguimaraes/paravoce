import React, { useState } from 'react';
import "../css/index.css";
import Menu from "./menu";

function GaleriaVideos() {

    const [secaoAtual, setSecaoAtual] = useState('galeriaVideos');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <>
            {secaoAtual === 'galeriaVideos' && (
                <>
                    <div className="text-intro6">
                        <h1>Nossa Galeria Virtual</h1>
                        <div className="imagens">
                            <div className="vid1">.</div>
                            <div className="vid1">.</div>
                        </div>

                       
                    </div>
                <button className="buttonMenuVoltar" onClick={() => cliqueSecao('menu')}> Voltar </button></>
            )}

            <div className='secao'>
                {secaoAtual === 'menu' && <Menu />}
            </div>
        </>
    );
}

export default GaleriaVideos;
