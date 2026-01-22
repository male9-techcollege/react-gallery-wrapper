/* **Opdelt Card med props**
Opgavebeskrivelse: 
FÆRDIG: Byg et stylet Card component som har 3 child components der tager imod props:
FÆRDIG - Et CardHeader komponent (skal tage imod en "text" prop)
FÆRDIG - Et CardBody komponent (skal tage imod en "content" prop)
FÆRDIG - Et CardFooter komponent  (skal tage imod en "content" prop)
FÆRDIG: Indsæt de tre komponenter i dit overordnede Card komponent.
FÆRDIG: Fra App.js, send det følgende objekt ind i Card som en prop og videre ned til de tre child components. Objektet skal indeholde:
FÆRDIG: - title - titlen der skal vises på cardet
FÆRDIG: - textContent - det text der skal vises på cardet 
FÆRDIG: - footerContent - det text der skal vises i bunden af cardet  
FÆRDIG: Bonus: 
Som bonus til denne opgave skal du lave "placeholder", eller "default" values til alle tre child components. 
Disse default values skal vise at der ikke er noget indhold. 
*/

/* The code of this component is based on: 
- the extensive sources provided for my image component (see file atoms/img-el.tsx); 
- my relatively extensive research on generic interface to use with specific HTML elements 
  (see region of the same name in file main-el.tsx);
- switch-codelab 
- for if... else...: react-component-codealong-med-kasper + my implementation of that in react-pros-and-cons, dynamic-list.tsx
- see also sources for way to fold regions in .jsx files and for 
  concatenation/combination of CSS classes in React in the file App.tsx.
*/

import type { HTMLAttributes, AnchorHTMLAttributes } from "react";

/* IMPORTANT NOTE: 
Since cards are NOT ALWAYS part of a set, that is to say that they can be used as isolated design elements 
(Google search results said so), I did not include the li element in the card components. 
*/
/* TO DO eventually (through other exercises): in order to use the card component later, I would like to have 
additional card variants, e.g.: 
1 (e.g. for img gallery with links to full-size picture), 2, 3, 4 parts; 
without a link as a parent;
etc. 
*/
// #region Card itself (the container) (organism) (region includes variants)

/* This interface is used by multiple components in this region */
interface cardInterfaceByMariePierreLessard {
    href: string;
    target?: string;
    rel?: string;
    // #region Explanation for styling choices/course notes
    /* children is a reserved word in React! The app will break if I changed it.
    I found that out in the modal assignment (see folder react-pros-and-cons). Source: Kasper. */
    /* REMINDER:
    - I chose to make the card component a flex container (not a grid) because the order of children of a flex container 
    can be changed with CSS. This cannot be done with inner grids. The children property below needs to be given a specific
    position in the card component (see return()), but the design could require a child picture to be above or below a heading, 
    etc.
    - It is important to KEEP the children property because exercise 3 requires an image to be added to the card!
    In theory, one could also add a badge, an overlay, etc. */
    // #endregion 
    children?: React.ReactNode;
};

// #region Card without inner React component(s): an anchor element with an article in it (2 versions: external and internal links)
/* Successful tests: 
- defaults are displayed or visible in the console if props are missing 
- className can be used to add styling
*/

// #region Research that was not immediately useful, but could turn out to help
/* The StackOverflow Q&A at https://stackoverflow.com/questions/55892409/how-to-extend-html-attributes-in-react-with-typescript
indicates that the full type names are in the format
React.AnchorHTMLAttributes<HTMLAnchorElement>
and not
AnchorHTMLAttributes<HTMLAnchorElement>
But now, I am not sure that I need that... I am keeping the source just in case.

In case typing errors occur: the following could solve the issues.

"What is React Router?
React Router is a library that provides routing capabilities for React applications.
Routing means handling navigation between different views.
React Router is the standard routing library for React applications."
https://www.w3schools.com/react/react_router.asp

"Link Component vs. Anchor Tag (href) in ReactJS and NextJS
Husnain Ashfaq (...)
Jun 1, 2024 (...)
### 6. Best Practices

- **Use Anchor Tags for External Links**: For links that navigate to external sites, continue using anchor tags.
- **Use Link Components for Internal Navigation**: Within ReactJS or NextJS applications, prefer using their respective `Link` components for internal navigation.
- **Preloading and Performance**: Take advantage of preloading features in `Link` components to enhance performance.
- **SEO Considerations**: Ensure your internal links are SEO-friendly by using `Link` components appropriately in NextJS.
- **Accessibility**: Ensure that both anchor tags and `Link` components are accessible by providing meaningful link text and using semantic HTML."
https://medium.com/@husnain.ashfaq3939/link-component-vs-anchor-tag-href-in-reactjs-and-nextjs-d73c406c41be */
// #endregion Research that was not immediately useful, but could turn out to help

type extendedGenericInterfaceForCardByMariePierreLessard = AnchorHTMLAttributes<HTMLAnchorElement> & cardInterfaceByMariePierreLessard;

export function CardWithExternalLinkAndArticleByMariePierreLessard(
    { href, target, rel, children, ...rest }:
    extendedGenericInterfaceForCardByMariePierreLessard) {

    let hrefWithFallbackByMariePierreLessard = href || "javascript:void(0)";
    /* Source: https://www.w3schools.com/tags/att_a_target.asp */
    let targetWithFallbackByMariePierreLessard = target || "_blank";
    /* Source 1: good explanation on the security role of noopener when opening a link in a new tab.
    There is a risk of "reverse tabnapping."
    https://linkbuilder.io/rel-noopener-noreferrer 
    
    Source 2: the rel attribute provides information to search engines/crawlers, among other things.
    https://www.w3schools.com/tags/att_a_rel.asp */
    let relWithFallbackByMariePierreLessard = rel || "external noopener";

    return (
        <a
            href={hrefWithFallbackByMariePierreLessard}
            target={targetWithFallbackByMariePierreLessard}
            rel={relWithFallbackByMariePierreLessard}
            {...rest}
        >
            <article>
                {children}
            </article>
        </a>
    );
};

export function CardWithInternalLinkAndArticleByMariePierreLessard(
    { href, target, rel, children, ...rest }:
    extendedGenericInterfaceForCardByMariePierreLessard) {

    let hrefWithFallbackByMariePierreLessard = href || "#globalFooter";
    /* Source: https://www.w3schools.com/tags/att_a_target.asp */
    let targetWithFallbackByMariePierreLessard = target || "_self";
    /* The rel attribute provides information to search engines/crawlers, among other things.
    Source: https://www.w3schools.com/tags/att_a_rel.asp */
    let relWithFallbackByMariePierreLessard = rel || "license";

    return (
        <a
            href={hrefWithFallbackByMariePierreLessard}
            target={targetWithFallbackByMariePierreLessard}
            rel={relWithFallbackByMariePierreLessard}
            {...rest}
        >
            <article>
                {children}
            </article>
        </a>
    );
};
// #endregion Card without inner React component(s): an anchor element with an article in it

// #region Card with 3 inner React component(s): an anchor element with an article in it (2 versions: external and internal links)
/* This region is based on the card without inner React components  */
type extendedGenericInterfaceForCard3PartsByMariePierreLessard = 
    AnchorHTMLAttributes<HTMLAnchorElement> & cardInterfaceByMariePierreLessard
    & headingElInterfaceByMariePierreLessard
    & cardBodyInterfaceByMariePierreLessard
    & cardFooterInterfaceByMariePierreLessard;
    /* Maybe TO DO: I thought of using the following, but the props passed from App() thanks to the rest parameter 
    might not always be appropriate to use in both the card parent and the child (header/heading, body or footer).
    I don't think that this option would make the styling easy or the app maintainable, and it could cause problems: 
    & extendedGenericInterfaceForHeadingElByMariePierreLessard
    & extendedGenericInterfaceForCardBodyByMariePierreLessard
    & extendedGenericInterfaceForCardFooterByMariePierreLessard;
    */

export function Card3PartsWithExternalLinkAndArticleByMariePierreLessard(
    { href, target, rel, headingNr, headingText, bodyContent, footerContent, children, ...rest }: 
    extendedGenericInterfaceForCard3PartsByMariePierreLessard) {

    let hrefWithFallbackByMariePierreLessard = href || "javascript:void(0)";
    /* Source: https://www.w3schools.com/tags/att_a_target.asp */
    let targetWithFallbackByMariePierreLessard = target || "_blank";
    /* Source 1: good explanation on the security role of noopener when opening a link in a new tab.
    There is a risk of "reverse tabnapping."
    https://linkbuilder.io/rel-noopener-noreferrer 
    
    Source 2: the rel attribute provides information to search engines/crawlers, among other things.
    https://www.w3schools.com/tags/att_a_rel.asp */
    let relWithFallbackByMariePierreLessard = rel || "external noopener";

    /* Til læreren: jeg ved godt, at størrelsen på kortenes billeder ikke er responsiv! 
    Det var ikke opgavens formål at bruge tid på det. Som konsekvens gav jeg bare en størrelse, som ikke er helt for stor
    uanset hvad brugerens "view port" er. Det var bare for at vise/teste, at komponentet virker efter hensigten! */
    return (
        <a
            href={hrefWithFallbackByMariePierreLessard}
            target={targetWithFallbackByMariePierreLessard}
            rel={relWithFallbackByMariePierreLessard}
            {...rest}
        >
            <article>
                <HeadingElByMariePierreLessard headingNr={headingNr} headingText={headingText} />
                <CardBodyByMariePierreLessard bodyContent={bodyContent}>
                    {children}
                </CardBodyByMariePierreLessard>
                <CardFooterByMariePierreLessard footerContent={footerContent} />
            </article>
        </a>
    );
};

export function Card3PartsWithInternalLinkAndArticleByMariePierreLessard(
    { href, target, rel, headingNr, headingText, bodyContent, footerContent, children, ...rest }:
    extendedGenericInterfaceForCard3PartsByMariePierreLessard) {

    let hrefWithFallbackByMariePierreLessard = href || "#globalFooter";
    /* Source: https://www.w3schools.com/tags/att_a_target.asp */
    let targetWithFallbackByMariePierreLessard = target || "_self";
    /* The rel attribute provides information to search engines/crawlers, among other things.
    Source: https://www.w3schools.com/tags/att_a_rel.asp */
    let relWithFallbackByMariePierreLessard = rel || "license";

    return (
        <a
            href={hrefWithFallbackByMariePierreLessard}
            target={targetWithFallbackByMariePierreLessard}
            rel={relWithFallbackByMariePierreLessard}
            {...rest}
        >
            <article>
                <HeadingElByMariePierreLessard headingNr={headingNr} headingText={headingText} />
                <CardBodyByMariePierreLessard bodyContent={bodyContent}>
                    {children}
                </CardBodyByMariePierreLessard>
                <CardFooterByMariePierreLessard footerContent={footerContent} />
            </article>
        </a>
    );
};
// #endregion Card with 3 inner React component(s): an anchor element with an article in it



// #endregion Card itself (the container) (organism) (region includes variants)

// #region Heading (just h1-6, i.e. atom): maybe TO DO: hgroup element (molecule)? Move atoms to atoms folder? 
/* Successful tests: 
- default is displayed or visible in the console if props are missing 
- the switch statement works when a heading level is provided
- className can be used to add styling
*/

interface headingElInterfaceByMariePierreLessard {
    headingNr: number;
    headingText: string;
};

type extendedGenericInterfaceForHeadingElByMariePierreLessard = HTMLAttributes<HTMLHeadingElement> & headingElInterfaceByMariePierreLessard;

/* Til læreren: jeg kaldte ikke dette komponent CardHeader, da et header-element skal have flere børn ifølge HTML-standarden,
og da opgaven kun krævede et element med props, dvs. et heading-element. Da de forskellige props beskrevet i instrukserne
skifter navn i instrukserne (selvom det ikke fungerer sådan i kodningen), tænkte jeg at navnet på komponenter nok ikke var
særlig vigtigt! */
export function HeadingElByMariePierreLessard(
    { headingNr, headingText, ...rest }:
    extendedGenericInterfaceForHeadingElByMariePierreLessard) {

    // #region Sources and notes on experiments
    /* I doubted that this could work because converting strings to HTML tags might not be allowed in React,
    even though it is possible to use template strings with innerHTML in vanilla JS. 
    I quickly gave up on that idea because the component needs to accept props, e.g. for class names. 
    let headingNrWithFallbackByMariePierreLessard = headingNr || 3;
    let headingOpeningTagByMariePierreLessard = `<h${headingNrWithFallbackByMariePierreLessard}>`;
    let headingClosingTagByMariePierreLessard = `</h${headingNrWithFallbackByMariePierreLessard}>`;
    */
    /* Source for which conditional expression or statement to use in React components:
    - ternary operator versus
    - a switch statement (combined with an immediately-invoked function expression (IIFE)) versus 
    - if
        or
    - if... else 
        or
    - if... else if... else 
    Sometimes, the latter just won't work!
    https://react-cn.github.io/react/tips/if-else-in-JSX.html    

    The assignment's instructions are hinting that a switch statement is the most appropriate in this casea
    (bonus: a default option = placeholder that indicates the absence of content).
    The default case of a switch statement can also address the issue that a user could enter a number 
    that is inferior or superior to 1-6; this would cause an error since there are only 6 HTML headings).
    I can also use switch for the card body and footer (a simpler situation). 

    The example in the React documentation (on which the following switch statement is based) omitted the use of break;
    When I added break; I got an unreachable code error, and I wondered why. It's a TypeScript error:

    "Unreachable code
    Statements guaranteed to not be executed at run time are now correctly flagged as unreachable code errors. For instance, 
    statements following unconditional return, throw, break or continue statements are considered unreachable."
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html

    "No, you don't need break after return, technically anything after return is unreachable code. – 
        user184994
        CommentedNov 19, 2017 at 7:25 (...)
    return terminates your function, so the code won't continue executing (and potentially falling through to the next case block). 
    There's no point in using break in such a situation. (...)
        answered Nov 19, 2017 at 7:27 
        Mureinik"
    https://stackoverflow.com/questions/47374592/do-i-still-need-to-use-break-after-i-use-return-in-switch-case
    */
    // #endregion Sources and notes on experiments

    return (
        <>
            {(() => {
                switch (headingNr) {
                    case 1:
                        return (
                            <h1 {...rest}>{headingText}</h1>
                        );
                    case 2:
                        return (
                            <h2 {...rest}>{headingText}</h2>
                        );
                    case 3:
                        return (
                            <h3 {...rest}>{headingText}</h3>
                        );
                    case 4:
                        return (
                            <h4 {...rest}>{headingText}</h4>
                        );
                    case 5:
                        return (
                            <h5 {...rest}>{headingText}</h5>
                        );
                    case 6:
                        return (
                            <h6 {...rest}>{headingText}</h6>
                        );
                    default:
                        return (
                            <div {...rest}>Heading level not provided</div>
                        );
                };
            })()}
        </>
    );
};
// #endregion Child: card header

// #region Card body (can be molecule or an atom): maybe TO DO: move atoms to atoms folder and molecules/potential molecules to a new molecules folder? 
/* Successful tests: 
- All alternatives provided by the switch statement were displayed. 
*/

interface cardBodyInterfaceByMariePierreLessard {
    bodyContent?: string;
    /* children is a reserved word in React! The app will break if I changed it.
    I found that out in the modal assignment (see folder react-pros-and-cons). Source: Kasper. */
    children?: React.ReactNode;
};

//Card body = div
type extendedGenericInterfaceForCardBodyByMariePierreLessard = HTMLAttributes<HTMLDivElement> & cardBodyInterfaceByMariePierreLessard;

export function CardBodyByMariePierreLessard(
    { bodyContent, children, ...rest }:
    extendedGenericInterfaceForCardBodyByMariePierreLessard) {

    // #region Reason for the following use of the switch statement and fallback variable as required argument
    /* I want to make sure that the creation of an HTML element happens in every case, in spite of the fact that
    both interface properties are optional. They have to be optional because the user could enter a single line
    (e.g. a short description), a group of HTML lines (e.g. several paragraphs), or both
    (having both is probably a bit lazy, but it could happen). 

    This is hard to accomplish with switch because in the absence of any argument coming into the switch statement,
    the switch that I envisaged would not run, and no element would be created by the component! The option
    switch (true), which was used in sources that I found, would also not run. 

    A fallback comes in handy to make sure that switch will always run, e.g. at the beginning of development/production,
    before any optional argument is provided.
    */
    // #endregion 
    /* DO NOT MOVE/REMOVE UNLESS THERE IS AT LEAST ONE REQUIRED PROP IN THE INTERFACE */
    let bodyContentFallbackByMariePierreLessard = "No description provided";

    // #region Sources and notes on experiments
    /* Source according to which operators (e.g. logical operators) can be used
    either between parentheses after switch
    or as a case to be verified:
    "Can a switch statement have multiple parameters? (...)
    We can also reverse the script by using the multiple parameters in the switch instead of in the case:"
    https://www.codecademy.com/forum_questions/5473e36c282ae35e12000630 
    
    "The switch (true) pattern as an alternative to if...else is especially useful if you want to utilize the fall-through 
    behavior." https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    (Not the case here because I have to return something, i.e. break out, in every case.)

    Experiments:
    --FAIL(S)--
    - When I had 
      switch (bodyContentFallbackByMariePierreLessard || bodyContent || children)
      only the fallback was displayed even though I provided the props. It's because the OR operator is exclusive.
      There is no AND/OR operator. The conditions must be read in order, too!
    --PARTIAL SUCCESS(ES)--
    - With 
      switch (undefined) 
      I can show the bodyContent or the children, but not both!
      This being said, TypeScript objects to the parameter being undefined.
    */
    // #endregion Sources and notes on experiments
    return (
        <>
            {(() => {
                switch (
                (bodyContentFallbackByMariePierreLessard && bodyContent && children) ||
                (bodyContentFallbackByMariePierreLessard && bodyContent) ||
                (bodyContentFallbackByMariePierreLessard && children)
                ) {
                    case (bodyContent && children):
                        return (
                            <div {...rest}>
                                {bodyContent}
                                {children}
                            </div>
                        );
                    case bodyContent:
                        return (
                            <div {...rest}>
                                {bodyContent}
                            </div>
                        );
                    case children:
                        return (
                            <div {...rest}>
                                {children}
                            </div>
                        );
                    default:
                        return (
                            <div {...rest}>
                                {bodyContentFallbackByMariePierreLessard}
                            </div>
                        );
                };
            })()}
        </>
    );
};
// #endregion Card body

// #region Card footer (can be molecule or an atom): maybe TO DO: move atoms to atoms folder and molecules/potential molecules to a new molecules folder? 

interface cardFooterInterfaceByMariePierreLessard {
    footerContent?: string;
    /* children is a reserved word in React! The app will break if I changed it.
    I found that out in the modal assignment (see folder react-pros-and-cons). Source: Kasper. */
    children?: React.ReactNode;
};

type extendedGenericInterfaceForCardFooterByMariePierreLessard = HTMLAttributes<HTMLElement> & cardFooterInterfaceByMariePierreLessard;

export function CardFooterByMariePierreLessard(
    { footerContent, children, ...rest }:
    extendedGenericInterfaceForCardFooterByMariePierreLessard) {

    // #region Reason for the following use of the switch statement and fallback variable as required argument
    /* I want to make sure that the creation of an HTML element happens in every case, in spite of the fact that
    both interface properties are optional. They have to be optional because the user could enter a single line
    (e.g. a short description), a group of HTML lines (e.g. several paragraphs), or both
    (having both is probably a bit lazy, but it could happen).

    This is hard to accomplish with switch because in the absence of any argument coming into the switch statement,
    the switch that I envisaged would not run, and no element would be created by the component! The option
    switch (true), which was used in sources that I found, would also not run.

    A fallback comes in handy to make sure that switch will always run, e.g. at the beginning of development/production,
    before any optional argument is provided.
    */
    // #endregion 
    /* DO NOT MOVE/REMOVE UNLESS THERE IS AT LEAST ONE REQUIRED PROP IN THE INTERFACE */
    let footerContentFallbackByMariePierreLessard = "Footer contents not provided";

    return (
        <>
            {(() => {
                switch (
                (footerContentFallbackByMariePierreLessard && footerContent && children) ||
                (footerContentFallbackByMariePierreLessard && footerContent) ||
                (footerContentFallbackByMariePierreLessard && children)
                ) {
                    case (footerContent && children):
                        return (
                            <footer {...rest}>
                                {footerContent}
                                {children}
                            </footer>
                        );
                    case footerContent:
                        return (
                            <footer {...rest}>
                                {footerContent}
                            </footer>
                        );
                    case children:
                        return (
                            <footer {...rest}>
                                {children}
                            </footer>
                        );
                    default:
                        return (
                            <footer {...rest}>
                                {footerContentFallbackByMariePierreLessard}
                            </footer>
                        );
                };
            })()}
        </>
    );
};
// #endregion Card footer
