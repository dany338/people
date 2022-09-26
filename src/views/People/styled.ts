import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 50%;
  height: auto;
  min-height: 200px;
  background-color: #FFFFFF;
  box-shadow: 0px 24px 64px rgba(22, 27, 45, 0.05);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  border-radius: 5px;

  &:hover {
    border-radius: 0.5rem;
    transition: outline-offset 0.1s ease;
    outline-offset: 4px;
    outline: #F2C94C auto 1px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
`;