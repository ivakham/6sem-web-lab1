import Poster from "../Poster";
import "./styles.css"

export default function Contents({posterList, onClickCallback}){
    return (
        <div class="contents">
            {posterList.map(poster => <Poster poster = {poster} onClickCallback = {onClickCallback} />)}
        </div>
    )
}