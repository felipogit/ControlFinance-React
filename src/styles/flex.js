import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 974px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem;

  & > div:nth-child(1){
    display: flex;
    width: 100%;
    gap: 59px;
  }

  @media (max-width: 768px) {
    & > div:nth-child(1){
      flex-direction: column;
      gap: 0;
    }
  }
  
`

export const StyledDivision = styled.div`
  display: flex;
  flex-direction: column;
`

