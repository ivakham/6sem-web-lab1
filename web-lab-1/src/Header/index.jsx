import logo from "../assets/logo.svg"
import "./styles.css"

export function defaultSort() {
    return (a,b)=>a.title.localeCompare(b.title)
}

export default function Header({OnSearch, OnSort}){

    const sortMap = new Map();
    sortMap.set("title",(a,b)=>a.title.localeCompare(b.title))
    sortMap.set("year",(a,b)=>b.year - a.year)
    sortMap.set("rating",(a,b)=>b.rating - a.rating)

    return (
    <header class="header">
        <img src={logo} alt="logo" class="header__logo" />
        <form>
            <input type="text" name="search-bar" placeholder="search" onChange={(e)=>OnSearch(e.target.value)} class="searchbar" />
        </form>
        <form class="sortbar">
            <label for="sort" class="sortbar__label">sort by:</label>
            <select id="sort" name="sort" onChange={(e)=>OnSort(sortMap.get(e.target.value))} class="sortbar__select">
                <option value="title">title</option>
                <option value="year">year</option>
                <option value="rating">rating</option>
            </select>
        </form>
    </header>
    );
}

