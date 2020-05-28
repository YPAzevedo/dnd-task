import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  min-height: 50px;
  margin: 5px;
  padding: 10px;
  background: white;

  div {
    display: flex;
  }

  input {
    border: none;
    border-bottom: 1px solid lightgray;
    margin-right: 8px;
    padding: 2px;
    flex: 1;
    transition: border-bottom 0.3s;

    &:focus {
      border-bottom: 1px solid #222;
    }
  }

  svg {
    margin: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
