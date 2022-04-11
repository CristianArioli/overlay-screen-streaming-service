import {useState} from 'react';
import RecImg from "../../assets/rec-gray-s.svg";
import HappyImg from "../../assets/happy-gray-w.svg";
import ShareImg from "../../assets/share-gray-s.svg";
import AddImg from "../../assets/add-gray-s.svg";

import {
  Container,
  ContainerSynopsis,
  ContainerButtons,
  ListButtonStyled,
  RecordButtonStyled,
  EvaluateButtonStyled
} from "./generalInformations.styled";

function GeneralInformations({ showSynopsis }) {
  const [isAddedToList, setIsAddedToList] = useState(false);
  const [isBeingRecorded, setIsBeingRecorded] = useState(false);
  const [evaluateWasClicked, setEvaluteWasClicked] = useState(false);

  return (
    <Container>
      <ContainerButtons>
        <div>
          <ListButtonStyled isAddedToList={isAddedToList} onClick={() => setIsAddedToList(!isAddedToList)}>
            <img src={AddImg} alt="Botão para adicionar a sua lista" />
          </ListButtonStyled>
          <p>Lista</p>
        </div>
        <div>
          <EvaluateButtonStyled evaluateWasClicked={evaluateWasClicked} onClick={() => setEvaluteWasClicked(!evaluateWasClicked)}>
            <img src={HappyImg} alt="Botão para avaliar a serie" />
          </EvaluateButtonStyled>

          <p>Avaliar</p>
        </div>
        <div>
          <RecordButtonStyled isBeingRecorded={isBeingRecorded} onClick={() => setIsBeingRecorded(!isBeingRecorded)}>
            <img src={RecImg} alt="Botão para gravar a serie" />
          </RecordButtonStyled>
          <p>Gravar</p>
        </div>
        <div>
          <button>
            <img src={ShareImg} alt="Botão para compartilhar a serie" />
          </button>
          <p>Compartilhar</p>
        </div>
      </ContainerButtons>
      <ContainerSynopsis>
        <h4>Sinopse</h4>
        <p>{showSynopsis}</p>
      </ContainerSynopsis>
    </Container>
  );
}

export default GeneralInformations;
