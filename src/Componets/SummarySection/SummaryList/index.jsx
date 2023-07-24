import { SummaryCard } from './SummaryCard/index'
import { StyledSummaryList } from './styled'

export const SummaryList = ({ summaryList, setSumaryList }) => {

  const removeItemList = (summaryId) => {
    if (confirm("Você deseja excluir esse valor?")) {
      setSumaryList((summaryList) => summaryList.filter(card => card.id !== summaryId))
    }
  }

  return (
    <StyledSummaryList>
      {summaryList.map((card) => <SummaryCard key={card.id} card={card} removeItemList={removeItemList} />)}

    </StyledSummaryList>
  )
}