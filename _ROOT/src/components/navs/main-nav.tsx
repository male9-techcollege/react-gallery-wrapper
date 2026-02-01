import navstyling from "./main-nav.module.scss";

export function MainNavByMariePierreLessard() {
    return (
        <nav className={navstyling.mainNavByMariePierreLessard}>
            <ul>
                <li><a href="#simpleImgGallery">My wrapper</a></li>
                <li><a href="#cardsWithHbf">My cards with props</a></li>
                <li><a href="#stopwatch">My stopwatch</a></li>
                <li><a href="#globalFooter">Copyright </a></li>
            </ul>
        </nav>
    );
};
