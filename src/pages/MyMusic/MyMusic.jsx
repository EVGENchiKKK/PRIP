import { SideBarSection } from "../../navigation/headerAside/headerAside";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { FooterNoVizit } from "../../components/FooterNoVizit";
import './../../App.css';


export const MyMusic = () => {
    return (
        <div className="homePage">
            <SideBarSection />
            <main className="MyMusicPage">
                <SearchBar/>
                <h1>Моя музыка</h1>
                {/* <NewRelizCard />
                <FourYouCard/>
                <NastroyCard/>
                <ReklPremTwo/> */}
                <FooterNoVizit />
            </main>
        </div>
    )
}