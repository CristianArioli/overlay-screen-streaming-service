import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }

  @media (max-width: 768px) {
    padding-top: 2em;
    padding-bottom: 2rem;
  }
`;

export const ContainerSynopsis = styled.div`
  @media (min-width: 1369px) {
    width: 80%;
  }
  @media (max-width: 1369px) {
    width: 100%;
  }

  h4,
  p {
    color: var(--text-body);
  }

  h4 {
    font-size: 1.3rem;
    margin-bottom: 0;
  }

  p {
    font-size: 1rem;
  }
`;

export const ContainerButtons = styled.div`
  @media (min-width: 1369px) {
    width: 20%;
  }
  @media (max-width: 1369px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-top: 4.5em;
    padding-bottom: 2rem;
  }
  width: 20%;
  display: flex;
  gap: 1em;
  overflow: hidden;

  button {
    background: transparent;
    border: none;

    img {
      transition: all 0.3s;
      &:hover {
        filter: invert(27%) sepia(8%) saturate(3069%) hue-rotate(93deg)
          brightness(93%) contrast(85%);
      }
    }
  }

  div {
    width: 50%;
    text-align: center;
    & p {
      font-size: 0.7em !important;
      color: var(--text-body);
      line-height: 1;
    }
  }
`;

export const ListButtonStyled = styled.button`
  img {
    filter: ${(props) =>
      props.isAddedToList &&
      "invert(27%) sepia(8%) saturate(3069%) hue-rotate(93deg) brightness(93%) contrast(85%)"};
  }
`;

export const EvaluateButtonStyled = styled.button`
  img {
    filter: ${(props) =>
      props.evaluateWasClicked &&
      "invert(27%) sepia(8%) saturate(3069%) hue-rotate(93deg) brightness(93%) contrast(85%)"};
  }
`;

export const RecordButtonStyled = styled.button`
  img {
    filter: ${(props) =>
      props.isBeingRecorded &&
      "invert(27%) sepia(8%) saturate(3069%) hue-rotate(93deg) brightness(93%) contrast(85%)"};
  }
`;