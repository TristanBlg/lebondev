import styled from "styled-components"

export const Container = styled.li`
  display: flex;
  align-items: flex-end;
  padding: 0.5rem 0;
`

export const MessageContainer = styled.div<{ outgoing: boolean }>`
  max-width: 80%;
  margin-left: ${(props) => props.outgoing && "auto"};
`
