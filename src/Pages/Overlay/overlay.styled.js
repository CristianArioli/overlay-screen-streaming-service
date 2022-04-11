import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerOverlay = styled.div`
  background-image: url(${(props => props.backgroundUrl)});
  background-size: cover;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(0.6);
  position: absolute;

  div:nth-child(1) {
    position: absolute;
    width: inherit;
    height: inherit;
    background: linear-gradient(to top,#111 25%,transparent 90%);
  }

  div:nth-child(2) {
    position: rel;
    width: inherit;
    height: inherit;
    background: linear-gradient(to left,#111 15%,transparent 90%);
  }
`;

export const ContainerContent = styled.div`
  padding: 2rem;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ContainerCloseButton = styled.button`
  @media(max-width: 540px){
    font-size: 1rem;
  }
  padding: 1.5rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
