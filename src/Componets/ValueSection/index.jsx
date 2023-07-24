import { StyledValueSection } from "./style"

export const ValueSection = ({summaryList}) => {
  const totalValue = summaryList.reduce((accValue, valueItem) => {
    if(valueItem.typeTransaction === 'Entrada') {
      return accValue + valueItem.value
    }else if(valueItem.typeTransaction === 'Saida'){
      return accValue -valueItem.value
    }else{
      return accValue
    }
  }, 0)

  return (
    <>

    {summaryList.length > 0 &&(
      <StyledValueSection>
        <div>
        <span className="nameValue">Valor total:</span>
        <p>O valor se refere ao saldo</p>
        </div>
     
      <span className="value">R$ {totalValue.toFixed(2)}</span>
      
    </StyledValueSection>
    )}

    
    
    </>
  )

}
