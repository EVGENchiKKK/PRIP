import { SideBarSection } from "../../navigation/headerAside/headerAside";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { CallToAction } from "../../components/cards/CallToAction";
import './../../App.css';

export const Home = () => {
    return (
        <div className="homePage">
            <SideBarSection />
            <main className="mainPlayPage">
                <SearchBar/>
                <CallToAction/>
            </main>
        </div>
    )
}