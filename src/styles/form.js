import styled from "styled-components";


export const StyledForm = styled.form`
width: 100%;
height: 434px;
border: 1px solid var(--color-grey-2);
display: flex;
flex-direction: column;
padding: 1.3125rem;
gap: 20px;
font-family: var(--font-second);


@media(min-width:768px){
  min-width: 355px;
}

`

export const StyledInput = styled.input`
  width: 100%;
  height: 2.875rem;
  font-family: var(--font-primary);
  font-size: 1rem;
  background-color: var(--color-grey-1);
  padding: 0 16px;
  ::placeholder{
    color: #868E96;
    
  }
`
export const StyledSelect = styled.select`
width: 100%;
  height: 2.875rem;
  font-family: var(--font-primary);
  font-size: 0.875rem;
  background-color: var(--color-grey-1);
  padding: 0 16px;

`

