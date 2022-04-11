import styled from "styled-components";
import "antd/lib/carousel/style/index.css";

export const ContainerCarousel = styled.div`
  & .slick-track {
    display: flex !important;
    gap: 2rem !important;
  }
`;

export const ContainerCastInfo = styled.div`
  background: #212121;
  text-align: center;
  height: 6rem;
  line-height: 0.9;
  padding: 2rem;
  @media (max-width: 628px) {
    padding: 1.5rem;
  }
  @media (max-width: 561px) {
    padding: 1.2rem;
  }
  span {
    font-size: 1.3rem !important;
    @media (max-width: 741px) {
      font-size: 0.9rem !important;
    }
    color: var(--text-title);
  }
  p {
    line-height: 1;
    font-size: 0.85rem;
    @media (max-width: 741px) {
      font-size: 0.8rem !important;
    }
  }
`;
