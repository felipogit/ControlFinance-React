import { useState } from "react"
import { Form } from "./Componets/FormSection"
import { Header } from "./Componets/Header"
import { SummarySection } from "./Componets/SummarySection"
import { ValueSection } from "./Componets/ValueSection"
import { GlobalStyles } from "./styles/global"
import {GlobalReset } from './styles/reset'
import { StyledContainer, StyledDivision} from "./styles/flex"

function App() {
  const [summaryList, setSumaryList] = useState([])
    
  return (
    <>
    <GlobalReset/>
    <GlobalStyles/>
      <Header />
      <main>
        <StyledContainer>
        <div>
        <StyledDivision>
        <Form setSumaryList={setSumaryList} />
        <ValueSection summaryList={summaryList} />
        </StyledDivision>
        <SummarySection summaryList={summaryList} setSumaryList={setSumaryList} />
        </div>
        </StyledContainer>
      </main>
    </>
  )
}

export default App
