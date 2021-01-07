import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex: 1;
`
export const StartBlock = styled.div`
  width: 22.5rem;
  border-right: 1px solid ${(props) => props.theme.colors.NIGHT["200"]};
`
export const EndBlock = styled.div`
  width: 22.6rem;
  border-left: 1px solid ${(props) => props.theme.colors.NIGHT["200"]};
`
export const MainBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const SearchBar = styled.div`
  padding: 1rem;
`
export const ConversationList = styled.ul`
  flex: 1;
  overflow: hidden;
`
export const MessageFooter = styled.div`
  padding: 1rem 0.5rem;
  box-shadow: 0px -2px 6px 0px ${(props) => props.theme.colors.NIGHT["100"]};
`
export const MessageList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem 0.5rem;
`
