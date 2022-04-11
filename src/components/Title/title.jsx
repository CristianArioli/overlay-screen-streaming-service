import {Container} from './title.styled';

function Title({showTitle, showGenre, showSubGenre, showReleaseYear}) {
  return (
    <Container>
      <h1>{showTitle}</h1>
      <span>/ {showGenre} - {showSubGenre} / {showReleaseYear} / </span>
    </Container>
  )
}

export default Title;