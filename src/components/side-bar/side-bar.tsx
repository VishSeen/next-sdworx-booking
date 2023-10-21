'use client'

import Image from "next/image"
import { FunctionComponent } from "react"
import logo from '../../../public/images/logo-black.png';
import config from '../../../config.json'
import SideItem from "./side-item/side-item";
import StyledSideBar from "./style";
import UserPanel from "../user-panel/user-panel";

const SideBar: FunctionComponent = () => {
    return(
        <StyledSideBar>
            <div className="top-section">
                <div className="side-bar__logo">
                    <Image
                        src={logo}
                        alt="SDWorx Logo"
                        width={200}
                    />
                </div>

                <nav>
                    <ul>
                        {
                            config?.ui?.sideBar.map((item, i) => (
                                <SideItem
                                    key={i}
                                    title={item?.title}
                                    icon={item?.icon}
                                    href={item?.href}
                                />
                            ))
                        }
                    </ul>
                </nav>
            </div>


            <div className="side-bar__user-panel">
                <UserPanel
                    username={config?.data?.user?.name}
                    teamName={config?.data?.user?.team}
                    profilePic={config?.data?.user?.profilePic}
                />
            </div>
        </StyledSideBar>
    )
}


export default SideBar;