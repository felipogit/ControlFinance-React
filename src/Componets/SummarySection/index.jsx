import { SummaryList } from "./SummaryList"
import { StyledSummarySection } from "./style"

export const SummarySection = ({summaryList, setSumaryList}) => {
  return(
    <StyledSummarySection>
      <h2>Resumo financeiro</h2>
      {summaryList.length > 0 ? (
        <SummaryList summaryList={summaryList} setSumaryList={setSumaryList}/>
      ) : (
        <h2>Você ainda não tem nenhum lançamento</h2>
      )}
      
    </StyledSummarySection>
    
  )
}