import nuKenzie from '../../assets/NuKenzie.png'
import { StyledContainer } from '../../styles/flex'
import { StyledHeader } from '../../styles/header'

export const Header = () => {
  return(
    <StyledHeader>
      <StyledContainer>
      <img src={nuKenzie} alt="Logo doo Nu kenzie" />
      </StyledContainer>
    </StyledHeader>
  )
} 