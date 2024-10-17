import { Input } from "../input"
import { Button } from "../button"
import "./style.scss"
import IconSearch from "../../assets/icon/search.svg"

export const Search = () =>  {
    return (
        <div className="search-container">
            <Input placeholder="Search for everything" type="small-broken"/>
            <Button type="small-broken">
                <img className="search-icon" src={IconSearch}/>
            </Button>
        </div>
    )
}