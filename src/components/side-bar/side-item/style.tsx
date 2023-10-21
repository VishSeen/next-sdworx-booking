import styled from 'styled-components'

const StyledSideItem = styled.li`
    margin: 7px 0px;

    &:hover {
        a {
            background-color: #fff;
        }
    }

    a {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px;
        border-radius: 3px;

        &.active {
            background-color: #fff;
        }
    }
`;

export default StyledSideItem;