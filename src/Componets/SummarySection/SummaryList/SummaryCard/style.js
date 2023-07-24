import styled from "styled-components";

export const StyledSummaryCard = styled.li`
background-color:var(--color-grey-1);
display: flex;
justify-content: space-between;
padding:  20px;
border-left: 5px solid ${props => (props.isInput ? '#03B898' : '#E9ECEF')};
font-family: var(--font-primary);


@media (max-width: 768px) {
      height: 156px;
      flex-direction: column;
      gap: 10px;
  }

.containerValue{
display: flex;
flex-direction: column;
justify-content: center;
gap: 9px;


p{
  color: #212529;
}

}

.containerDescription{
  display: flex;
  flex-direction: column;
  
  

  h2{
    font-weight: 700;
    font-size: 1rem;
    font-family: var(--font-primary);
    width: 337px;
    height: 39px;
    margin: 0;
  }

  p{
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-3);
  }
}



`