import styled from '@emotion/styled'
import { Field } from 'formik'

export const Name = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const Input = styled(Field)`
  height: 40px;
  width: 200px;
  padding: 0 8px 0 8px;
  font-size: 14px;
`