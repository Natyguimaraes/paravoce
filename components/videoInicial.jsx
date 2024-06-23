import React, { useState } from 'react';
import "../css/index.css";
import Tempo from './tempo';
import VideoPlayer from './inicialVideo';
import Menu from './menu';
import Pagina1 from './pagina1';

function Video() {
    const [secaoAtual, setSecaoAtual] = useState('videoInicial');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <>
            <div>
                {secaoAtual === 'videoInicial' && (
                    <>
                        <div className="ContainerP3">
                            <div className="text-intro3">
                                <span> Esse é o  tempo que estamos juntos! Passamos por muitos momentos, muito aprendizado um com o outro e persistência para fazer dar certo. 💖 </span>

                                <div className="tempo">
                                    <Tempo />
                                </div>
                                <div className="video1">
                                    <VideoPlayer />
                                </div>

                                <p>
                                "Dusk Till Dawn" é uma música pop do cantor e compositor britânico ZAYN em colaboração com a cantora e compositora australiana Sia. Lançada em 2017, a música fala sobre um amor intenso e apaixonado que persiste mesmo nas horas mais sombrias e difíceis da vida. As letras retratam um relacionamento no qual os amantes estão dispostos a permanecer juntos e enfrentar qualquer desafio, prometendo estar um ao lado do outro desde o crepúsculo até o amanhecer, ou seja, durante todo o tempo, independente das circunstâncias adversas. A música também transmite uma sensação de urgência e intensidade emocional, destacando a profundidade dos sentimentos envolvidos.
                                </p>
                                <button className="buttonP3" onClick={() => cliqueSecao('menu')}> Clica aqui </button>
                            </div>
                        </div>
                        <button className="buttonMenuVoltar1" onClick={() => cliqueSecao('pagina1')}> Voltar </button>
                    </>
                )}
            </div>

            <div className='secao'>
                {secaoAtual === 'menu' && <Menu />}
            </div>

            <div className='secao'>
                {secaoAtual === 'pagina1' && <Pagina1 />}
            </div>
        </>
    );
}

export default Video;
