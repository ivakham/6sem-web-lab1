import "./styles.css"

export default function Poster({poster, onClickCallback}) {
    return (
    <div class="poster" onClick={()=>onClickCallback(poster.id)} data-testid="clickable-component">
        <img src={poster.imgSrc} alt={poster.imgAlt} class="poster__img"/>
        <p class="poster__title" data-testid="component-title">
            {poster.title}
        </p>
    </div>
    )
}