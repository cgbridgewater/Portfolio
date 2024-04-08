import origin from "./images/originStory.png"
import TypingText from "./typingText";

const Header = () => {

    return(
        <nav className="Nav">
            <img className="NavTitle" src={origin} alt="Origin Story Title"/>
            <h1 className="TitleOf">Of</h1>
            <h1 className="TitleName">Chris Bridgewater</h1>
            <TypingText/>
            <h1 className="FullStack">Full Stack</h1>
            <a className="TldrJump" href="#tldr"> &gt;&gt; Jump To tl:dr &lt;&lt;</a>
        </nav>
    );
};

export default Header;