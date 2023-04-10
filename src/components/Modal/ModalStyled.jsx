import styled from '@emotion/styled';
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  /* height: calc(100vh - 20px); */
  height: 50vw;
  background-color: #fdfdea;
  /* z-index: 30;  редерим модалку в інший html елемент modal-root в indexHTML. */
  padding: 20px;
`;
const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 100; */
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(243, 110, 230, 0.2);
  transition: visibility 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export { StyledBackdrop, StyledModal };
