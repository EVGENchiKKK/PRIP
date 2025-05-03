import './brows.css';
import './../../App.css';
import { SideBarSection } from './../../navigation/headerAside/headerAside'
import { SearchBar } from './../../components/searchBar/SearchBar' 

export const BrowsPage = () => {
    return (
        <div className="homePage">
            <SideBarSection />
            <main className="mainPlayPage">
                <SearchBar/>
                <h1>Просмотр</h1>
                {/* <NewRelizCard />
                <FourYouCard/>
                <NastroyCard/>
                <ReklPremTwo/> */}
            </main>
        </div>
    )
}