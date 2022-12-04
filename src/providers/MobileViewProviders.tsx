import React from "react";
import { MobileViewProvider } from "../context/MobileViewContext";

export const MobileViewProviders = ({children }: {children: JSX.Element}) => {
    return <MobileViewProvider>{children}</MobileViewProvider>
}