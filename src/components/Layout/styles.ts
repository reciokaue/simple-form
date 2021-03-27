import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    > div{
        width: 50%;
    }
`;
export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-right: 11px solid var(--primary);
    flex-shrink: 0;
`;
export const ImgContainer = styled.div`
    display: flex;
    width: 50vw;

    background: var(--primary);
`;
