import { Carousel } from "antd";
import {
  ContainerCarousel,
  ContainerCastInfo,
} from "./castInformations.styled";

function CastInformations({ showCast }) {
  return (
    <ContainerCarousel>
      <Carousel
        dots={false}
        slidesToShow={3}
        draggable={true}
        infinite={false}
      >
        {showCast?.map((actor) => (
          <ContainerCastInfo key={actor.ID}>
            <span>{actor.Name}</span>
            <p>Seu Personagem</p>
          </ContainerCastInfo>
        ))}
        {/* inicio do mock de atores para o carousel */}
        <ContainerCastInfo>
          <span>Ator Fictício 1</span>
          <p>Seu Personagem</p>
        </ContainerCastInfo>
        <ContainerCastInfo>
          <span>Ator Fictício 2</span>
          <p>Seu Personagem</p>
        </ContainerCastInfo>
        <ContainerCastInfo>
          <span>Ator Fictício 3</span>
          <p>Seu Personagem</p>
        </ContainerCastInfo>
        <ContainerCastInfo>
          <span>Ator Fictício 4</span>
          <p>Seu Personagem</p>
        </ContainerCastInfo>
        {/* fim do mock de atores para o carousel */}
      </Carousel>
    </ContainerCarousel>
  );
}

export default CastInformations;
