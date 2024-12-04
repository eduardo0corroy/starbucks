import React, { useState } from "react";
import { MainStyle, Copo, Section } from "./style";

import copolaranjap from "../../assets/image/copolaranjap.png";
import copovermelhop from "../../assets/image/copovermelhop.png";
import copoamarelop from "../../assets/image/copoamarelop.png";
import copolaranjag from "../../assets/image/copolaranjag.png";
import copovermelhog from "../../assets/image/copovermelhog.png";
import copoamarelog from "../../assets/image/copoamarelog.png";
import sound from "../..//assets/sounds/drink.wav"

import elipselaranja from "../../assets/image/elipselaranja.png";
import elipsevermelha from "../../assets/image/elipsevermelha.png";
import elipseamarela from "../../assets/image/elipseamarela.png";

export default function Home() {
  const [corSelecionada, setCorSelecionada] = useState("laranja");

  
  const coposPequenos = {
    laranja: copolaranjap,
    vermelho: copovermelhop,
    amarelo: copoamarelop,
  };

  const coposGrandes = {
    laranja: copolaranjag,
    vermelho: copovermelhog,
    amarelo: copoamarelog,
  };

  const tocarSom = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const elipses = {
    laranja: elipselaranja, 
    vermelho: elipsevermelha,
    amarelo: elipseamarela,
  };

  return (
    <MainStyle>
      <section>
        <h2>Mais que Café</h2>
        <h1>
          Isso é <span>Starbucks</span>
        </h1>
        <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </p>
        <button>SAIBA MAIS</button>
        <div>
          <img
            src={coposPequenos.laranja}
            alt="Copo pequeno laranja"
            onClick={() =>{ setCorSelecionada("laranja");
            tocarSom();
            }}
          />
          <img
            src={coposPequenos.vermelho}
            alt="Copo pequeno vermelho"
            onClick={() => {setCorSelecionada("vermelho");
            tocarSom();
            }}
          />
          <img
            src={coposPequenos.amarelo}
            alt="Copo pequeno amarelo"
            onClick={() => {setCorSelecionada("amarelo");
            tocarSom();
            }}
          />
        </div>
      </section>
      <Section>
       
        <img
          src={elipses[corSelecionada]}
          alt={`Elipse ${corSelecionada}`}
        />
       
        <Copo
          src={coposGrandes[corSelecionada]}
          alt={`Copo ${corSelecionada} grande`}
        />
      </Section>
    </MainStyle>
  );
}
