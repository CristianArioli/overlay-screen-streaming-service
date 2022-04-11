import { Carousel } from "antd";
import {
  ContainerCarousel,
  ContainerCastInfo,
} from "./castInformations.styled";

function CastInformations({ showCast }) {
  return (
    <ContainerCarousel>
      <Carousel dots={false} slidesToShow={3} draggable={true} infinite={false}>
        {showCast?.map((actor) => (
          <ContainerCastInfo>
            <span>{actor.Name}</span>
            <p>Teste</p>
          </ContainerCastInfo>
        ))}
      </Carousel>
    </ContainerCarousel>
  );
}

export default CastInformations;
