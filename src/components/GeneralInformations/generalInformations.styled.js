import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
`;

export const ContainerSynopsis = styled.div`
  @media(min-width: 1369px){
    width: 80%;
  }
  @media(max-width: 1369px){
    width: 100%;
  }
  
    h4, p {
      color:  var(--text-body)
    }
    
    p {
      font-size: 1.2rem;
    }
`;

export const ContainerButtons = styled.div`
  @media(min-width: 1369px){
    width: 20%;
  }
  @media(max-width: 1369px){
    width: 100%;
  }
  width: 20%;
  display: flex;
  gap: 1em;

  button {
    background: transparent;
    border:none;
  }

  div {
    width: 50%;
    text-align: center;
    & p {
    font-size: 0.7em !important;
    color:  var(--text-body);
    line-height: 1
  }
  }
  
`;