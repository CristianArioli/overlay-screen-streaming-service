import LoadingSpin from "react-loading-spin";
import { Container } from "./loadingScreen.styled";

function LoadingScreen() {
  return (
    <Container>
      <LoadingSpin primaryColor="#225739" />
    </Container>
  );
}

export default LoadingScreen;
