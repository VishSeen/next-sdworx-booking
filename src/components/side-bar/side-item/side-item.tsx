import { FunctionComponent } from "react"
import StyledSideItem from "./style"
import { SideItem } from "@/types/props"
import Link from "next/link"
import { usePathname } from "next/navigation"


const SideItem: FunctionComponent<SideItem> = ({
    title,
    icon,
    href
}) => {
    const pathname = usePathname();
    const currentRoute = pathname == href;

    return(
        <StyledSideItem>
            <Link href={href} className={currentRoute ? 'active' : ''}>
                <span className="material-symbols-outlined">
                    {icon}
                </span>

                <span>
                    {title}
                </span>
            </Link>
        </StyledSideItem>
    )
}

export default SideItem;