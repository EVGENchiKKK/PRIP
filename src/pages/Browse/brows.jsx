import './brows.css'
import { SideBarSection } from '../../navigation/headerAside/headerAside'

export const BrowsPage = () => {
    return (
        <body>
        <div class="container">
            
            <SideBarSection/>
            <div class="main-content">
                <div class="header">
                    <h1>Просмотр</h1>
                    <div class="search-bar">
                        <input type="text" placeholder="Артист, трек, альбом и мг."/>
                    </div>
                </div>
                <div class="popular-genres">
                    <h2>Популярные жанры</h2>
                    <div class="genres">
                        <div class="genre">
                            <img src="genre1.jpg" alt="Genre 1"/>
                            <span>Хип-хоп и рэп</span>
                        </div>
                        <div class="genre">
                            <img src="genre2.jpg" alt="Genre 2"/>
                            <span>Рок</span>
                        </div>
                        <div class="genre">
                            <img src="genre3.jpg" alt="Genre 3"/>
                            <span>EDM</span>
                        </div>
                        <div class="genre">
                            <img src="genre4.jpg" alt="Genre 4"/>
                            <span>Pop Music</span>
                        </div>
                    </div>
                </div>
                <div class="moods">
                    <h2>Настроение</h2>
                    <div class="mood-cards">
                        <div class="mood-card">
                            <img src="mood1.jpg" alt="Mood 1"/>
                        </div>
                        <div class="mood-card">
                            <img src="mood2.jpg" alt="Mood 2"/>
                        </div>
                        <div class="mood-card">
                            <img src="mood3.jpg" alt="Mood 3"/>
                        </div>
                        <div class="mood-card">
                            <img src="mood4.jpg" alt="Mood 4"/>
                        </div>
                    </div>
                </div>
                <div class="artists">
                    <h2>Артисты</h2>
                    <div class="artist-cards">
                        <div class="artist-card">
                            <img src="artist1.jpg" alt="Artist 1"/>
                            <h3>IDOL TEARS</h3>
                            <p>Pepep Nahudi</p>
                        </div>
                        <div class="artist-card">
                            <img src="artist2.jpg" alt="Artist 2"/>
                            <h3>PEEKABOO</h3>
                            <p>Big Baby Tape, Aarne</p>
                        </div>
                        <div class="artist-card">
                            <img src="artist3.jpg" alt="Artist 3"/>
                            <h3>california rocket...</h3>
                            <p>кровь из носа</p>
                        </div>
                        <div class="artist-card">
                            <img src="artist4.jpg" alt="Artist 4"/>
                            <h3>BORN TO TRAP</h3>
                            <p>kizaru</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}