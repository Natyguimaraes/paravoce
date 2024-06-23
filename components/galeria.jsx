import React, { useState } from 'react';
import "../css/index.css";
import Menu from "./menu";
import Imagem1 from "/1.jpeg";
/*import Imagem2 from "/2.jpeg";
import Imagem3 from "/3.jpeg";
import Imagem4 from "/4.jpeg";
import Imagem5 from "/5.jpeg";
*/
function Galeria() {

    const [secaoAtual, setSecaoAtual] = useState('galeria');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <>
        <div>
            {secaoAtual === 'galeria' && (
                <>
                    <div className="text-intro6">
                        <h1>Nossa Galeria Virtual</h1>
                        <div className="imagens">
                            <div className="img1">
                            <img src={Imagem1} alt="Descrição da imagem" />
                            <h2> Título</h2>
                            </div>
                            </div>

                           {/* <div className="img2">
                            <img src={Imagem2} alt="Descrição da imagem" />
                            </div>

                            <div className="img3">
                            <img src={Imagem3} alt="Descrição da imagem" />
                            </div>
                            
                            <div className="img4">
                            <img src={Imagem4} alt="Descrição da imagem" />
                            </div>

                            <div className="img5">
                            <img src={Imagem5} alt="Descrição da imagem" />
                            </div>
            */}
                        

                       
                    </div>
                <button className="buttonMenuVoltar" onClick={() => cliqueSecao('menu')}> Voltar </button></>
            )}

            <div className='secao'>
                {secaoAtual === 'menu' && <Menu />}
            </div>
            </div>
        </>
    );
}

export default Galeria;
