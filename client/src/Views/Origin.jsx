import { useEffect } from "react";
import Header from "../Components/Origin/header/header";
import Content from "../Components/Origin/main/content/content";
import Tldr from "../Components/Origin/main/tldr/tldr";
import './Origin.css';

const Origin = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className="Origin">
            <Header/>
            <Content/>
            <Tldr/>
        </div>
    )
}

export default Origin;