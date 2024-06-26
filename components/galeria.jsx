import React, { useState } from 'react';
import Menu from "./menu";
import Imagem1 from "/1.jpeg";
import Imagem2 from "/17062023.jpg";
import Imagem3 from "/23072023.jpg";
// import Imagem4 from "/4.jpeg";
// import Imagem5 from "/5.jpeg";

function Galeria() {
    const [secaoAtual, setSecaoAtual] = useState('galeria');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    const images = [
        { src: Imagem1, alt: 'Descrição da imagem 1', titulo: '06 de agosto de 2023' },
        { src: Imagem2, alt: 'Descrição da imagem 2', titulo: '17 de junho de 2023' },
        { src: Imagem3, alt: 'Descrição da imagem 3', titulo: '23 de julho de 2023' },
        // { src: Imagem4, alt: 'Descrição da imagem 4', titulo: 'Título 4' },
        // { src: Imagem5, alt: 'Descrição da imagem 5', titulo: 'Título 5' },
    ];

    return (
        <>
            <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
                {secaoAtual === 'galeria' && (
                    <>
                        <div className="text-intro6">
                            <h1>Nossa Galeria Virtual</h1>
                            <div className="imagens">
                                {images.map((image, index) => (
                                    <div key={index} className="img-container">
                                        <img src={image.src} alt={image.alt} />
                                        <h2>{image.titulo}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="buttonMenuVoltar" onClick={() => cliqueSecao('menu')}>Voltar</button>
                    </>
                )}
                <div className='secao'>
                    {secaoAtual === 'menu' && <Menu />}
                </div>
            </div>
        </>
    );
}

export default Galeria;
