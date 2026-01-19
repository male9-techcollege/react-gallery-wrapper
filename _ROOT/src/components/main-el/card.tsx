/* **Opdelt Card med props**
Opgavebeskrivelse: 
Byg et stylet Card component som har 3 child components der tager imod props:
- Et CardHeader komponent (skal tage imod en "text" prop)
- Et CardBody komponent (skal tage imod en "content" prop)
- Et CardFooter komponent  (skal tage imod en "content" prop)
Indsæt de tre komponenter i dit overordnede Card komponent.
Fra App.js, send det følgende objekt ind i Card som en prop og videre ned til de tre child components. 
Objektet skal indeholde:
- textContent - det text der skal vises på cardet 
- title - titlen der skal vises på cardet
- footerContent - det text der skal vises i bunden af cardet  
Bonus: 
Som bonus til denne opgave skal du lave "placeholder", eller "default" values til alle tre child components. Disse default values skal vise at der ikke er noget indhold. 
*/

/* TO DO is this still relevant? */
/* The code of this component is based on the extensive sources provided for my image component (see file atoms/img-el.tsx) 
and my relatively extensive research on generic interface to use with specific HTML elements 
(see region of the same name in file main-el.tsx). 
*/

/* The following module does style the h2 (no class name given) */
import typography from "../../styles/typography.module.scss";
import type { HTMLAttributes } from "react";

interface sectionTwoByMariePierreLessard {
    header: React.ReactNode;
    body: React.ReactNode;
    footer: React.ReactNode;
};

type extendedGenericInterfaceForS2ByMariePierreLessard = HTMLAttributes<HTMLElement> & sectionTwoByMariePierreLessard;

export function SectionOneByMariePierreLessard({ header, body, footer }: extendedGenericInterfaceForS2ByMariePierreLessard) {
    return (
        <section {... rest}>
            <h2>{h2}</h2>
            {children}
        </section>
    );
};
