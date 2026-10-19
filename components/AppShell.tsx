'use client'

import { usePathname } from "next/navigation"
import SiteHeader from "./SiteHeader";


const AppShell = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    // ye true ya false return krega
    const isFullScreenRoute = pathName.startsWith("/workspace") || pathName.startsWith("/shared")
    // console.log(isFullScreenRoute)

    if (isFullScreenRoute) {
        return <>
            {children}
        </>
    }
    return (
        <div>
            <SiteHeader />
            {children}
        </div>
    )
}

export default AppShell