import sharedstyles from "../../styles/globals.module.scss";
import headerstyling from "./g-header.module.scss";

export const GlobalHeaderByMariePierreLessard = ()=> {
    return(
        <header className={`
            ${headerstyling.gHeaderByMariePierreLessard} 
        `}>
            <div className={`
                ${sharedstyles.wrapperByMariePierreLessard}
                ${sharedstyles.secondaryWrapperByMariePierreLessard}
                ${sharedstyles.centeredSelfByMariePierreLessard}
            `}>
                react-gallery-wrapper
            </div>
        </header>
    );
};
