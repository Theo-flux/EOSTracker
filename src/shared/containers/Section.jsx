import React from 'react';

const Section = ({children, className, ...restProps}) => {
    return(
        <section {...restProps} className={`reveal ${className}`}>
            { children }
        </section>
    )
}

export { Section }