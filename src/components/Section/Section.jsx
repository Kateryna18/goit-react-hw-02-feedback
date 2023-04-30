import React from 'react';
import css from 'components/Section/Section.module.css';

export default function Section({title, children}) {
    return (
        <section className={css.feedback}>
            {title && <h2 className="feedback__request">{title}</h2>}
            {children}
        </section>
    )
}


