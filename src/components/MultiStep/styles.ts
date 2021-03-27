import styled, { css } from 'styled-components';
import { MdContactMail, MdPerson, MdCheck } from 'react-icons/md'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;    

    > div{
        display: flex;
        justify-content: center ;
        align-items: center;
        flex-direction: row;
        width: fit-content;
    }   
`;  
export const Step= styled.div`
    width: 33px;
    height: 33px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background:     var(--c500);
    position: relative;
    >h2{
        position: absolute;
        bottom: -25px;
        font-size: 8px;
        white-space: nowrap
    }
    &.completed{
        background: var(--primary);
    }
    transition: 500ms;
`;
export const Connector= styled.div`
    width: 92px;
    height: 2px;

    background: var(--c500);
`;
const IconCSS = css`
    width: 16px;
    height: 16px;
    color: var(--c500);
`;
export const ContactIcon = styled(MdContactMail)`${IconCSS}`;
export const PersonIcon = styled(MdPerson)`${IconCSS}`;
export const CheckIcon = styled(MdCheck)`${IconCSS}`;