import {useState} from 'react';
import {Container} from './title.styled';

function Title({showTitle, showGenre, showSubGenre, showReleaseYear}) {
  const [indicationValue] = useState("80% Indicado");
  const [countryShow] = useState("EUA");
  const [indicativeClassification] = useState("14");

  return (
    <Container>
      <h1>{showTitle}</h1>
      <span>{indicationValue} / {showGenre} - {showSubGenre} / {showReleaseYear} / {countryShow} / {indicativeClassification} </span>
    </Container>
  )
}

export default Title;