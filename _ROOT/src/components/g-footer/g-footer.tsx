/* The following module does style the small element (no class name given) */
import typography from "../../styles/typography.module.scss";
import sharedstyles from "../../styles/globals.module.scss";
import footerstyling from "./g-footer.module.scss";

export function GlobalFooterByMariePierreLessard() {
    return (
        <footer id="globalFooter" className={`
            ${footerstyling.gFooterByMariePierreLessard} 
        `}>
            <div className={`
                ${sharedstyles.wrapperByMariePierreLessard}
                ${sharedstyles.secondaryWrapperByMariePierreLessard}
                ${sharedstyles.centeredSelfByMariePierreLessard}
            `}>
                <small>
                    &copy; 2026. Coding and pictures by Marie-Pierre Lessard. License: MIT (attribution required).
                </small>
            </div>
        </footer>
    );
};
