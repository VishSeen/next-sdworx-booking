import styled from 'styled-components';

const StyledSideBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 15px;
    padding-bottom: 20px;
    background-color: #EEF1F5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .side-bar__logo {
        width: 10%;
    }
`;

export default StyledSideBar;