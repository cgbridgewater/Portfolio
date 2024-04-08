import { Link } from "react-router-dom";

const Content = () => {

    return(
        <div>
            <p className="ContentText">
                The Original Chris, hailing from a small town in the Pacific Northwest, had a stable <b>15-year</b> career working in the <b>pulp and paper industry</b>. However, the weekly out-of-state travel became monotonous and exhausting.
            </p>
            <p className="ContentText">
                Following an <b>accident</b> that left him with no choice but to persevere, <b>Chris V2 was born.</b> Rather than see this injury as a set-back, Chris saw an <b>opportunity</b> to commit himself to learning a new trade that had long been merely a side-quest: <b>Software Programming.</b>
            </p>
            <p className="ContentText">
                Chris completed Colorado Technical University's Coding Dojo full stack program with several accomplishments:
            </p>
            <ul className="ContentText List">
                <li className="OriginLi"><b>Triple Black Belt</b> status (perfect scores in JavaScript, Python and Java)</li>
                <li className="OriginLi">Provided <b>mentorship</b> to fellow students to help them <b>troubleshoot</b> code remotely</li>
                <li className="OriginLi">Worked with small <b>teams</b> to rapidly complete projects</li>
                <li className="OriginLi">Strengthened <b>research skills</b></li>
                <li className="OriginLi">Developed a <b>growth mindset</b></li>
            </ul>
            <p className="ContentText">
                As an Avid <b>self-learner</b>, his quest to become a professional software developer was not complete when he graduated. Current projects in progress include C# and Django. He welcomes challenges and strives for <b>excellence</b>.
            </p>
            <br />
            <p className="ContentText">
                For more information and project examples, visit
            </p>
            <p className="ContentText">
                <Link className="PortfolioLink" to="/">chrisbridgewater.com</Link> 
            </p>
            <br />
            <p className="ContentText">
                The story doesn’t end here, but rather takes an exciting turn in the next chapter...
            </p>
            <h3 className="ContentText Pulse">
                Stay tuned for more details!
            </h3>
        </div>
    )
}

export default Content;