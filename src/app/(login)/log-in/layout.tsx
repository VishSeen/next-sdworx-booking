
import { poppins } from '@/styles/fonts'


export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={poppins.style}>
                {children}
            </body>
        </html>
    )
}
