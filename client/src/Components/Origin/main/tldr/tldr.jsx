import CardFlip from "./CardFlip";

const Tldr = () => {

    return(
        <div>
            <h3 id="tldr" className="Tldr">tl;dr</h3>
            <p className="ContentTextSmall">
                (hover or click on images to tell the story)
            </p>
            <CardFlip/>
        </div>
    )
}

export default Tldr;