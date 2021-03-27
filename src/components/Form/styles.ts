import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > div {
    &.active {
      transform: translateX(0%);
    }
    &.disabled {
      transform: translateX(200%);
      transition-delay: 2s;
      display: none;
    }
    transition: 1s;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;

    margin-bottom: 36px;
    margin-top: 85px;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  margin-top: 25px;
  width: 314px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 45px;
    border-radius: 4px;
    &:first-child {
      margin-right: 15px;
    }
    transition: 0.3s ease-in-out;
    background: var(--primary);
    color: var(--c50);
    &:hover {
      background: var(--secondary);
    }

    &.outlined {
      background: transparent;
      border: solid 1.5px var(--c50) !important;
      color: var(--c100);

      &:hover {
        background: var(--c800);
      }
    }
  }
`;
