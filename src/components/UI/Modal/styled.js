import styled from "styled-components";

export const StyledModalBody = styled.div`
  display: flex;
  background: #eaeaea;
  width: fit-content;
  max-height: 100%;
  position: relative;
  overflow: hidden;
  max-width: 860px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(133, 133, 133, 0.15);
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledModalWrapper = styled.div`
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
  ${StyledModalBody} {
    transform: scale(${({ $show }) => ($show ? 1 : 0)});
  }
`;
