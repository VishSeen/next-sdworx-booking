import styled from 'styled-components';

const StyledUserPanel = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    &:hover {
        cursor: pointer;
    }

    .user-panel__info {
        margin-right: 10px;
        p {
            font-size: 14px;
            font-weight: 500;

            &:last-child {
                font-size: 12px;
                opacity: 0.7;
            }
        }
    }

    .user-panel__image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 4px;
        background-color: #fff;
    }
`;

export default StyledUserPanel;