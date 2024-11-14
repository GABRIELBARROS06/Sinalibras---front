
import styles from '../CSS/Home.module.css'
import logo from '../../img/logoGrande.png';
import chat from '../../img/chat.png';
import atividades from '../../img/atividades.png';
import aulas from '../../img/videoAula.png';
import ranking from '../../img/Rank.png';
import pesquisar from '../../img/pesquisar.png';
import comentario from '../../img/chat.png'

import videoAPI from '../../img/video1.mp4';
import { CSSTransition, TransitionGroup } from 'react-transition-group';




 import { useState } from 'react'
 import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';


import React from 'react';


function Home() {
    const { dados } = useContext(AppContext);
    const navigate = useNavigate();
    console.log(dados);
    const [activePage, setActivePage] = useState(1);

    function irParaVideo() {

    }
    function abrirComentarios() {

    }

    function iconNavegacaoPerfil() {
            navigate('/Perfil')
    }

    function iconNavegacaoAtividades() {
        navigate('/Aulas')
}
function iconNavegacaoChat() {
    navigate('/Chat')
}
//function iconNavegacaoRanking() {
    //navigate('/Ranking')
//}

    return (
        <div className={styles.body}>
            <div className={styles.esquerda}>
                <img src={logo}></img>
                <div className={styles.nav}>
                    <div className={styles.divzinha} onClick={iconNavegacaoPerfil}>
                            <img src={chat}></img>
                        <h4>Perfil</h4>

                    </div>
                    <div className={styles.divzinha} onClick={iconNavegacaoChat}>
                        <img src={atividades}></img>
                        <h4>Chat</h4>
                    </div>
                    <div className={styles.divzinha} onClick={iconNavegacaoAtividades}>
                        <img src={aulas}></img>
                        <h4>Aulas</h4>
                    </div>
                    <div className={styles.divzinha}>
                        <img src={ranking}></img>
                        <h4>Ranking</h4>
                    </div>
                </div>
            </div>
            <div className={styles.centro}>
                <div className={styles.search_bar}>
                    <div>
                        <img src={pesquisar}></img>
                        <input type="text" placeholder="Pesquisar..." />
                    </div>
                </div>
                {/* AQ EU VOU COLOCAR TDS OS COISINHAS COM UM APPEND CHILDREN DE PUBLICACAO */}
                <div className={styles.cardPublicacaoTipoVideo}>
                        <div className={styles.infoEVideo}>
                    <video muted onClick={irParaVideo} className={styles.video}>
                        <source src={videoAPI}  type="video/mp4"></source>{/*AQ PEGA UM VIDEO ACREDITO Q LOCAL, POR ESQUANTO TA UM VIDEO FICTICIO, MAS PRA PEGAR O DE VDD, É SÓ EXCLUIR A CRIACAO DA CONST DA LINHA 4, Q DAI VAI SER SUBSTITUIDO PELO DA FUNCAO ACIMA*/}
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                        <div className={styles.informacoesDoVideo}>
                            <h3 className={styles.infoVideo}>titulo</h3>
                            <h3 className={styles.infoVideo}>data e hr de postagem</h3>
                        </div>

                        </div>
                    <hr></hr>
                    <div className={styles.divComentar} onClick={abrirComentarios}>
                        <div>
                        <button>
                        <img src={comentario}></img>
                        </button>
                        <h4>Comentar...</h4>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Home

