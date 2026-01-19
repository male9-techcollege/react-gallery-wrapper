/* The code of this component is based on the extensive sources provided for my image component (see file atoms/img-el.tsx) 
and my relatively extensive research on generic interface to use with specific HTML elements 
(see region of the same name in file main-el.tsx). 
*/

/* The following module does style the h2 (no class name given) */
import typography from "../../styles/typography.module.scss";
import type { HTMLAttributes } from "react";

interface sectionTwoByMariePierreLessard {
    h2: string;
    /* children is a reserved word in React! The app will break if I changed it.
    I found that out in the modal assignment (see folder react-pros-and-cons). Source: Kasper. */
    children: React.ReactNode;
};

type extendedGenericInterfaceForS2ByMariePierreLessard = HTMLAttributes<HTMLElement> & sectionTwoByMariePierreLessard;

export function SectionOneByMariePierreLessard({ h2, children, ...rest }: extendedGenericInterfaceForS2ByMariePierreLessard) {
    return (
        <section {... rest}>
            <h2>{h2}</h2>
            {children}
        </section>
    );
};
