import { useEffect, useState } from "react";
import PlayButtonIcon from "../../assets/play-small-player-w.svg";
import { getEpisodesOfTheShow } from "./episodes.service";
import {
  Container,
  TabPaneContainer,
  CollapsePanelContainer,
  CollapseContainer,
  TabsContainer,
} from "./episodes.styled";

function Episodes() {
  const [arrayOfSeasons, setArrayOfSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getEpisodesOfTheShow().then((data) => {
      setEpisodes(data);
      let numberOfSeasons = 1;
      data.forEach((episode) => {
        if (episode?.SeasonNumber > numberOfSeasons)
          numberOfSeasons++;
      });
      setArrayOfSeasons([...Array(numberOfSeasons)]);
    });
  }, []);

  const generatePlayButton = () => (
    <button>
      <img src={PlayButtonIcon} height="30px" alt="Botão de play do episodio" />
    </button>
  );

  useEffect(()=> {
    console.log(episodes)
  },[episodes]);

  return (
    <Container>
      <TabsContainer>
        {arrayOfSeasons.map((_, i) => (
          <TabPaneContainer tab={`T${i + 1}`} key={`${i + 1}`}>
            <CollapseContainer accordion ghost>
              {episodes?.map((episode) => {
                if (episode?.SeasonNumber === (i + 1)) {
                  return (
                    <CollapsePanelContainer
                      showArrow={false}
                      header={`${episode.EpisodeNumber} ${episode.Title}`}
                      key={`${i + 1}${episode.EpisodeNumber}`}
                      extra={generatePlayButton()}
                    >
                      <img src={episode.Image} width="100%" alt="Imagem do episódio"/>
                      <p>{episode.Synopsis}</p>
                    </CollapsePanelContainer>
                  );
                } else return "";
              })}
            </CollapseContainer>
          </TabPaneContainer>
        ))}
      </TabsContainer>
    </Container>
  );
}

export default Episodes;
