import styled from "styled-components";

export const StyledModalContent = styled.div`
  padding: 25px;
`;

export const StyledCloseWrapper = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  & svg {
    width: 20px;
    height: 20px;
    fill: #696969;
  }
`;

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledButton = styled.button`
  background: #129990;
  border: none;
  padding: 15px;
  border-radius: 12px;
  color: #fffbde;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
`;
