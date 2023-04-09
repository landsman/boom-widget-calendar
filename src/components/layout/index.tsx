import React from "react";
import {GlobalStyle} from "./theme";

type PropTypes = {
    children: React.ReactNode;
}

export function Layout({ children }: PropTypes): JSX.Element {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
}
