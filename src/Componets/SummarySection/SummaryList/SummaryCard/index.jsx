import { StyledButton } from "../../../../styles/button"
import { StyledSummaryCard } from "./style"

export const SummaryCard = ({card, removeItemList}) => {
  const isInput = card.typeTransaction === "Entrada"


  return(
    <StyledSummaryCard isInput={isInput}>
      <div className="containerDescription" >
        <h2>{card.description}</h2>
        <p>{card.typeTransaction}</p>
      </div>
      <div className="containerValue">
        <p>R$ {card.value}</p>
        <StyledButton onClick={() => removeItemList(card.id)} >Excluir</StyledButton>
      </div>
    </StyledSummaryCard>
  )
}