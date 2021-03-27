import styled from 'styled-components';

export const Container = styled.div`
    & input:focus ~ label, & input:valid ~ label{
        background: var(--c900)!important;
        padding: 0px 6px;
        width: fit-content;
        transform: scale(.75) translateY(-170%) translateX(-20%);
        color: var(--primary);

        transition: 200ms;
    }
    &{
        margin-bottom: 10px;
        position: relative;
        margin-top: 10px;
        > input{
            border: solid 1.5px var(--c300);
            border-radius: 2px ;
            padding: 8px 15px ;
            
            height: 44px;
            width: 312px;   
            background: transparent;
            &:focus{
                border: solid 1.5px var(--primary) ;
                font-size: 14px;
            }
        }
        > label{
            position: absolute;
            left: 15px;
            top: 12px;
            transition: 200ms;

            text-align: left;
            font-size: 14px;

            padding: 0px 10px;
            
            display: flex;
            align-items: center;
            justify-content: flex-start;

            background: var(--c900);
        }
    }
`;
