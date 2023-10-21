import SideBar from "@/components/side-bar/side-bar"


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <html>
            <body>
                <SideBar />
                {children}
            </body>
        </html>
    )
}