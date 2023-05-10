import React from 'react';
import Header from './components/Header';
import Continente from './components/Continente';
import Fecha from './components/Fecha';

import "./TourStyle.css"

const TourApp = () => {
    return(
        <div id='Tour'>
            <Header/>
            <Continente imageSrc={'https://preview.redd.it/7bumtqt8dvya1.png?width=160&format=png&auto=webp&v=enabled&s=65aea928a0a5a49a85a896f641e4b60b46bcf341'}/>
            
            <div className="grid">
                <Fecha Date="Aug 19" Festival="Summer Sonic Osaka" Pais="JP" />
                <Fecha Date="Aug 20" Festival="Summer Sonic Tokyo" Pais="JP" />
                <Fecha Date="Aug 22" Festival="Sonic Mania" Pais="JP" />
                <Fecha Date="Aug 24" Festival="Rising Sun Rock Festival" Pais="JP" />
            </div>
            
            <Continente imageSrc={'https://preview.redd.it/q0qvbqt8dvya1.png?width=260&format=png&auto=webp&v=enabled&s=e487cb8a1adc0a679383eecfe64d954f0f482e5e'}/>
            
            <div className="grid">
                <Fecha Date="Aug 27" Festival="Reading Festival" Pais="UK" />
                <Fecha Date="Aug 28" Festival="Leeds Festival" Pais="UK" />
                <Fecha Date="Sep 2" Festival="Electric Picnic" Pais="IE" />
                <Fecha Date="Sep 4" Festival="Lollapalooza Berlin" Pais="DE" />
                <Fecha Date="Sep 6" Festival="Primavera Sound Barcelona" Pais="ES" />
                <Fecha Date="Sep 10" Festival="Down The Rabbit Hole" Pais="NL" />
                <Fecha Date="Sep 12" Festival="Rock am Ring" Pais="DE" />
                <Fecha Date="Sep 16" Festival="Pukkelpop" Pais="BE" />
                <Fecha Date="Sep 18" Festival="Rock Werchter" Pais="BE" />
                <Fecha Date="Sep 23" Festival="Reeperbahn Festival" Pais="DE" />
                <Fecha Date="Sep 25" Festival="Glastonbury Presents: Live at Worthy Farm" Pais="UK" />
                <Fecha Date="Sep 30" Festival="Ozora Festival" Pais="HU" />
            </div>

            <Continente imageSrc={'https://preview.redd.it/5bazast8dvya1.png?width=390&format=png&auto=webp&v=enabled&s=a6150815875a60c2bb3a3ea95ec559ceabc821b1'}/>
            <div className="grid">
                <Fecha Date="Sep 3" Festival="Electric Zoo" Pais="US" />
                <Fecha Date="Sep 10" Festival="Riot Fest" Pais="US" />
                <Fecha Date="Sep 16" Festival="Life is Beautiful" Pais="US" />
                <Fecha Date="Sep 23" Festival="Austin City Limits" Pais="US" />
                <Fecha Date="Sep 30" Festival="Voodoo Music " Pais="US" />
            </div>
        
        </div>
        
    );

};

export default TourApp;
