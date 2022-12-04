import React, {createContext } from "react";

const drawerSideBarWidth = 240;
const drawerRightBarWidth = 130;


export interface MobileViewContextType {
    drawerSideBarWidth: number,
    drawerRightBarWidth: number,
    handleDrawerToggleSideBar: () => void,
    handleDrawerToggleRightBar: () => void,
    mobileOpenSideBar: boolean,
    mobileOpenRightBar: boolean,
}

export const MobileViewContext = createContext<MobileViewContextType | null>(null);


export const MobileViewProvider = ({children}: {children: JSX.Element}) => {

    const [mobileOpenSideBar, setMobileOpenSideBar] = React.useState(false);
    const [mobileOpenRightBar, setMobileOpenRightBar] = React.useState(false);

    const handleDrawerToggleSideBar = () => {
        setMobileOpenSideBar(!mobileOpenSideBar);
    };

    const handleDrawerToggleRightBar = () => {
        setMobileOpenRightBar(!mobileOpenRightBar);
    };


    return(
            <MobileViewContext.Provider value={{drawerRightBarWidth, drawerSideBarWidth, handleDrawerToggleRightBar, handleDrawerToggleSideBar, mobileOpenSideBar, mobileOpenRightBar}}>
                {children}
            </MobileViewContext.Provider>
    )
}