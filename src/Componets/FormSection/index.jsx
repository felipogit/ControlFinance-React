import { useState } from "react"
import { StyledForm, StyledInput } from '../../styles/form'
import { StyledSelect } from '../../styles/form'
import { StyledButton } from '../../styles/button'
import { v4 as uuidv4 } from 'uuid';

export const Form = ({ setSumaryList }) => {
  const [description, setDescription] = useState("")
  const [value, SetValue] = useState("")
  const [typeTransaction, SetTypeTrasaction] = useState("")

  const addSumatyToList = () => {
    const newList = { id: uuidv4(), description, value, typeTransaction }
    setSumaryList((summaryList) => [...summaryList, newList])
  }


  const inputNumber = (e) => {
    const newValue = parseInt(e.target.value)
    SetValue(newValue)
  }

  const submit = (e) => {
    e.preventDefault()
    addSumatyToList()
    setDescription("")
    SetValue("")
    SetTypeTrasaction("")
  }

  return (
    <StyledForm onSubmit={submit}>
      <label htmlFor="description">Descrição</label>
      <StyledInput type="text" id="description" name="description" placeholder="Digite aqui sua descrição" value={description} onChange={(e) => setDescription(e.target.value)} required></StyledInput>
      <label htmlFor="value">Valor (R$)</label>
      <StyledInput type="number" id="value" name="value" value={value} onChange={inputNumber} required />
      <label htmlFor="typeValue">Tipo de Valor</label>
      <StyledSelect id="typeValue" name="typeValue" value={typeTransaction} onChange={(e) => SetTypeTrasaction(e.target.value)} required>
        <option value="">Tipo de valor</option>
        <option value="Entrada">Entrada</option>
        <option value="Saida">Saida</option>
      </StyledSelect>

      <StyledButton buttonSize="big" fullwidth={true} type="submit">Inserir Valor</StyledButton>
    </StyledForm>
  )
}