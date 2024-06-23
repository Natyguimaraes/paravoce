import React, { useState } from 'react';
import "../css/index.css";
import Menu from './menu';


function Historia() {
    const [secaoAtual, setSecaoAtual] = useState('nossaHistoria');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <div>
            {secaoAtual === 'nossaHistoria' && (
                <div className="ContainerP5">
                    <div className="text-intro5">
                        <h5 > Vou te contar um pouco na minha perpectiva da gente!💖 </h5>
                        <h5> Aaaah, a nossa história... </h5>
                        <p>
                            Quando penso em nós dois, lembro-me da primeira vez que te vi. 
                            Apesar de meu jeito reservado, não pude evitar sentir algo especial desde o início. Foi durante um processo seletivo, uma ironia do destino,
                            não é mesmo? (risos)
                        </p>
                        <p>
                            Eu, que sempre jurei nunca me apaixonar, que considerava o amor uma bobagem e
                            era orgulhosa demais para admitir qualquer fraqueza, acabei me rendendo a você.
                            Foi uma luta contra meus próprios pensamentos e receios, mas havia algo tão genuíno em nós.
                        </p>
                        <p>
                            Os dias passavam, os contatos eram raros. Eu era reservada e não gostava de muita proximidade,
                            e você também era quieto e reservado. Até hoje me pergunto como você conseguiu se aproximar de
                            mim (risos). Apenas trocávamos cumprimentos breves, até que, aos poucos, as conversas ao descer
                            do ônibus e caminhar para o trabalho nos aproximaram....
                        </p>
                        <p>
                            No início, você me enviou uma mensagem mostrando interesse, mas por receio, eu recusei. Passei um
                            tempo sem caminhar ao seu lado na chegada do trabalho, temendo que nossa relação nunca mais fosse
                            se desenvolver. No entanto, a distância só fez nosso amor crescer ainda mais. À medida que o tempo
                            passava, nos aproximávamos novamente, especialmente perto do fim de nosso contrato como aprendizes.
                            Isso me entristecia, pois significava que logo não nos veríamos mais, e enfrentaríamos uma nova rotina.
                            Mas nos últimos momentos, lá no Senac, você começou a sentar perto de mim. Lembro-me claramente daquele
                            dia em que combinamos de pegar o mesmo ônibus. Mesmo quando eu estava indo com meu irmão, optava pelo ônibus
                            só para estar ao seu lado.
                        </p>
                        <p>
                            Ficávamos tímidos ao nos cumprimentar, mas todos os dias ia feliz ao trabalho sabendo que você estaria lá. Um dia em particular me marcou profundamente. Conversamos mais do que o habitual,
                            falando sobre animais, especialmente cavalos, um assunto que sempre me interessou, mas que não tinha com quem compartilhar. Quando você me convidou para andar a cavalo pela cidade, meu coração
                            se encheu de alegria e meu amor por você cresceu ainda mais.
                        </p>
                        <p>
                            Em outro momento, você me convidou para sair, mas recusei por medo de explicar aos meus pais. No entanto, quando você se propôs a vir em minha casa e que estaria comigo, e veio no dia seguinte,
                            mesmo sem termos nos beijado e sem me conhecer completamente, percebi que você era para mim e que poderia confiar em você. Somos mesmo loucos, não é? (risos)
                        </p>
                        <p>
                            Hoje somos totalmente diferente um com o outro de quando éramos aprendizes, mudamos perspectivas, sem tirar a nossa essência de ser! Timidos um com o outro, agora não existe mais (risos)! Você me completa, Mozinho.
                        </p>
                        <p>
                            E pensar que o destino se encarregou disso tudo e marcou nosso encontro, éramos tão distantes e hoje somos tão próximos, mesmo morando em cidades diferentes, somos uma só carne!
                        </p>

                        <h5><b>HOJE FAZEMOS 1 ANO JUNTOS, ISSO ME DEIXA MUITO FELIZ, APESAR DA DISTÂNCIA, OBRIGADA POR NUNCA DESISTIR DE NÓS EM MEIO AS DIFICULDADES. ISSO COMPROVA QUE NOS AMAMOS PROFUNDAMENTE, NOSSO AMOR SERÁ INFINITO,
                            CRESCEREMOS JUNTOS, SEREMOS ETERNOS.
                        </b></h5>
                        <p>
                            Eu te amo, <b>MEU AMOR!</b> Do fundo do meu coração!
                        </p>

                        <div className="buttons-menu">
                            <button className="buttonMenuVoltar" onClick={() => cliqueSecao('menu')}> Voltar </button>
                        </div>
                    </div>
                </div>
            )}

            <div className='secao'>
                {secaoAtual === 'menu' && <Menu />}
            </div>

        </div>
    );
}

export default Historia;

