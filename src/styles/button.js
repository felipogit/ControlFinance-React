import styled, {css} from "styled-components";

export const StyledButton = styled.button`
  
  font-size: 1rem;
  font-family: var(--font-primary);
  font-weight: 500;
  color: var(--color-grey-1);
  

  ${({fullwidth}) => {
    if(fullwidth){
      return css`
        width: 100%;
      `
    }
  }}

  ${({buttonSize}) => {
    if(buttonSize === "big"){
      return css`
        padding: 0 2rem;
        height: 3rem;
        background: var(--color-color-primary);
        border-radius: 0.5rem;
      `
    }else{
      return css`
        height:19px;
        padding: 0 0.1875rem ;
        background: var(--color-grey-2);
        color: var(--color-grey-3);
        width: 49px;
        font-size: 0.625rem;
        font-family: var( --font-primary);
      `
    }
  }}

`