import styled from "styled-components";
import "antd/lib/carousel/style/index.css";

export const ContainerCarousel = styled.div`
  & .slick-track {
    display: flex !important;
    gap: 2rem !important;
  }
`;

export const ContainerCastInfo = styled.div`
  font-size: 1.3rem !important;
  background: #212121;
  text-align: center;
  height: 5rem;
  display: inline-block;
  padding: 0.5rem;
`;
