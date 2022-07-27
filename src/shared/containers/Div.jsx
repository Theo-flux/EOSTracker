import React from "react";

const Div = ({children, className, ...restProps}) => {
    return(
        <div {...restProps} className = {`mx-auto w-4/5 max-w-7xl py-44 md:py-32 ${className}`}>
            { children }
        </div>
    )
}

const Nav = ({children, className, ...restProps}) => {
    return(
        <nav {...restProps} className = {`mx-auto w-4/5 max-w-7xl py-4 ${className}`}>
            { children }
        </nav>
    )
}


export { Div, Nav };