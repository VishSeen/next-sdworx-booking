import { UserPanelProps } from "@/types/props";
import { FunctionComponent } from "react";
import StyledUserPanel from "./style";
import Image from 'next/image';

const UserPanel: FunctionComponent<UserPanelProps> = ({
    username,
    teamName,
    profilePic
}) => {
    return (
        <StyledUserPanel className="user-panel">
            <div className="user-panel__image">
                <span className="material-symbols-outlined">
                    {profilePic}
                </span>
            </div>

            <div className="user-panel__info">
                <p>
                    {username}
                </p>

                <p>
                    #{teamName}
                </p>
            </div>

            <span className="material-symbols-outlined">
                expand_more
            </span>
        </StyledUserPanel>
    );
}


export default UserPanel;