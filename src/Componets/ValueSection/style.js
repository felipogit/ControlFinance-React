import styled from "styled-components";

export const StyledValueSection = styled.div`
border: 1px solid var(--color-grey-2);
margin-top: 18px;
height: 96px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
 
& > div:nth-child(1){
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    p{
      color: #343A40;
      font-size: 0.75rem;
      font-weight: 400;
    }
  }

.nameValue{
  font-weight: 700;
  font-size: 1rem;
}
.value{
  font-weight: 700;
  color: var(--color-color-primary);
  font-size: 1rem;
}
`