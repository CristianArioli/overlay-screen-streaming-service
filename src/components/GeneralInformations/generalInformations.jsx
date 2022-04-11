import RecImg from "../../assets/rec-gray-s.svg";
import SadImg from "../../assets/sad-gray-w.svg";
import ShareImg from "../../assets/share-gray-s.svg";
import AddImg from "../../assets/add-gray-s.svg";

import {
  Container,
  ContainerSynopsis,
  ContainerButtons,
} from "./generalInformations.styled";

function GeneralInformations({ showSynopsis }) {
  return (
    <Container>
      <ContainerButtons>
        <div>
          <button>
            <img src={AddImg} alt="Botão para adicionar a sua lista" />
          </button>
          <p>Lista</p>
        </div>
        <div>
          <button>
            <img src={SadImg} alt="Botão para avaliar a serie" />
          </button>

          <p>Avaliar</p>
        </div>
        <div>
          <button>
            <img src={RecImg} alt="Botão para gravar a serie" />
          </button>
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
