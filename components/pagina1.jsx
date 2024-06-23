import React, { useState } from 'react';
import "../css/index.css";
import Video from './videoInicial';

function Pagina1() {
    const [secaoAtual, setSecaoAtual] = useState('pagina1');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <>
            {secaoAtual === 'pagina1' && (
                <div className="ContainerP1">
                    <div className="text-intro">
                        <h1> Oi, amor! 💖 </h1>
                        <span> Preparei esse site especial para você, para mostrar o quanto você significa para mim. </span> <br />
                        <span> É tão bom te ter como <b>meu companheiro</b> </span><br />
                        <span> <b>Amigo</b>  </span> <br />
                        <span> <b> E namorado </b> 💖</span> <br />

                        <div className="text-perg">
                            <button onClick={() => cliqueSecao('videoInicial')}> VAMOS CONTINUAR? </button>
                        </div>
                    </div>
                </div>
            )}

            {secaoAtual === 'videoInicial' && (
                <div className='secao'>
                    <Video />
                </div>
            )}
        </>
    );
}

export default Pagina1;
