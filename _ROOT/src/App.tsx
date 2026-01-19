import "./App.scss"; 
import sharedstyles from "./styles/globals.module.scss";
import mainstyling from "./components/main-el/main-el.module.scss";
import gridstyling from "./components/atoms/grid.module.scss";
import imgstyling from "./components/atoms/img-el.module.scss";

import { GlobalHeaderByMariePierreLessard } from "./components/g-header/g-header";
import { MainNavByMariePierreLessard } from "./components/navs/main-nav";
import { MainByMariePierreLessard } from "./components/main-el/main-el";
    import { SectionOneByMariePierreLessard } from "./components/main-el/section-h1-2";
    import { GridByMariePierreLessard } from "./components/atoms/grid";
    import { ImgComponentByMariePierreLessard } from "./components/atoms/img-el";
import { GlobalFooterByMariePierreLessard } from "./components/g-footer/g-footer";

import woman from "./assets/blondine_akkc_img089.webp";
import man from "./assets/mc_akkc_img064.webp";

function App() {

    /* Source for way to fold regions in .jsx files: https://stackoverflow.com/questions/58882591/region-for-jsx */
    // #region Sources for concatenation/combination of CSS classes in React
    /* The following combines a class from the CSS file with Tailwind styling (source: Kasper).
    Interestingly, even though Tailwind is supposed to be inline styling with the highest specificity,
    in this system, it is overriden by the styling in the CSS files. 
    <button className={style.buttonClass + " " + "shadow-2xl shadow-white"} onClick={handleClick}>Click me!</button>
 
    It is also possible to concatenate CSS class names as follows:
    "BlueKnight3108 (...)
    <div className={`${styles.class1} ${styles.class2} ${styles.classN}`}>"
    https://www.reddit.com/r/reactjs/comments/q1apj7/how_to_add_multiple_classes_to_classname_using/
    */
    // #endregion
    return (
        <>
            <GlobalHeaderByMariePierreLessard />
            <MainNavByMariePierreLessard />
            <MainByMariePierreLessard
                className={`
                    ${sharedstyles.wrapperByMariePierreLessard} 
                    ${sharedstyles.secondaryWrapperByMariePierreLessard} 
                    ${mainstyling.pageBasicsByMariePierreLessard}
                `}
            >
                <SectionOneByMariePierreLessard id={"simpleImgGallery"} h1={"React Child Components"} h2={"Exercise 1"}>
                    <GridByMariePierreLessard className={gridstyling.gridWoPassePartoutByMariePierreLessard}>
                        <ImgComponentByMariePierreLessard 
                            src={woman} 
                            alt={"Blond woman. Graffiti at AKKC, Aalborg."} 
                            loading={"eager"} 
                            className={imgstyling.filterByMariePierreLessard} 
                        />
                        <ImgComponentByMariePierreLessard 
                            src={man} 
                            alt={"Man. Graffiti at AKKC, Aalborg."} 
                            loading={"eager"} 
                            className={imgstyling.filterByMariePierreLessard} 
                        />
                    </GridByMariePierreLessard>
                </SectionOneByMariePierreLessard>
            </MainByMariePierreLessard>
            <GlobalFooterByMariePierreLessard />
        </>
    );
};

export default App;
