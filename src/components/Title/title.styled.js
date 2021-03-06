import styled, {keyframes} from 'styled-components';

const enterAnimation = keyframes`
  0% {
    transform: translateX(-20%);
  }

  100% {
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  animation: ${enterAnimation} 2s;
  padding-left: 4rem;
  padding: 0rem 2rem 0 2rem;
  @media(max-width: 540px){
      margin-bottom: 20px;
  }
  h1 {
    color: var(--text-title);
    @media(max-width: 540px){
    font-size: 3rem;
    }
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0px;
  }
  span {
    font-size: 1.2rem;
  }
`;