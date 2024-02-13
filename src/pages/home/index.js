import React, {Suspense, lazy, useState} from "react";
import Header from "../../components/Header/header";
import './style.css'
import Video from '../../assets/video.mp4'
import Cards from "../../components/cards";
function Home(){
    
    return(
        <>
            <Header />
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video}/>
                        Seu navegador não suporta esse video!
                    </video>
                    <div id="sinopse">
                        <p className="description">
                        Após dois anos espreitando as 
                        ruas como Batman, Bruce Wayne se 
                        encontra nas profundezas mais sombrias de Gotham City.
                        Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                        </p>
                        <button className="button">Comprar ingresso</button>
                </div>
                </div>
            </div>
            <Cards />
        </>
    )
}

export default Home;