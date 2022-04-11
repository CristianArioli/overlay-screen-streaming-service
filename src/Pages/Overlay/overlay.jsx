import { useEffect, useState } from "react";
import Title from "../../components/Title/title";
import InformationsTabs from "../../components/InformationsTabs/informationsTabs";
import Episodes from "../../components/Episodes/episodes";
import { getGeneralDataAboutTheShow } from "./overlay.service";
import CloseSearchImg from "../../assets/close-search-w.svg";
import {
  ContainerCloseButton,
  ContainerOverlay,
  ContainerContent,
  Container,
} from "./overlay.styled";

function Overlay() {
  const [backgroundUrl, setBackgroundUrl] = useState("");
  const [showTitle, setShowTitle] = useState("");
  const [showGenre, setShowGenre] = useState("");
  const [showSubGenre, setShowSubGenre] = useState("");
  const [showReleaseYear, setShowReleaseYear] = useState("");
  const [showCast, setShowCast] = useState([]);
  const [showSynopsis, setShowSynopsis] = useState("");

  useEffect(() => {
    getGeneralDataAboutTheShow().then((data) => {
      setBackgroundUrl(data.Images.Background);
      setShowTitle(data.Title);
      setShowGenre(data.Genres[0].Title);
      setShowSubGenre(data.Genres[1].Title);
      setShowReleaseYear(data.Year);
      setShowCast(data.Cast);
      setShowSynopsis(data.Synopsis);
    });
  }, []);

  return (
    <Container>
      <ContainerOverlay backgroundUrl={backgroundUrl}>
        <div/>
        <div/>
        <div/>
      </ContainerOverlay>
      <ContainerContent>
        <ContainerCloseButton>
          <img src={CloseSearchImg} alt="Botão de Fechar Overlay" />
        </ContainerCloseButton>
        <Title
          showTitle={showTitle}
          showGenre={showGenre}
          showSubGenre={showSubGenre}
          showReleaseYear={showReleaseYear}
        ></Title>
        <Episodes />
      </ContainerContent>
      <InformationsTabs showCast={showCast} showSynopsis={showSynopsis}/>

    </Container>
  );
}

export default Overlay;
