import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;

  flex-direction: column;

  width: 100%;
  min-height: 50px;
  height: ${(props) => (props.isOpen ? "auto" : "50px")};

  padding-left: 20px;
  padding-right: 20px;

  border-bottom: 2px solid #dedbdb;

  overflow: hidden;
`;

export const Top = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 50px;
`;

export const TopButtons = styled.div`
  display: flex;

  align-items: center;

  gap: 20px;
`;

export const OpenButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  border: none;

  background: transparent;

  cursor: pointer;
`;
