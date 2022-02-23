import React from "react";
import { Route, Routes} from 'react-router-dom';
import { 
    HomePage,
    ExploreSynergies,
    Metaverse,
    AboutUs,
    MeetTheFirst,
    InProduction,
    TotaCreators,
    BecomeACitizen,
    TotaNfts,
 } from "../pages";

function MyRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <>
                <Route path='/in-production' element={<InProduction />} />
                <Route path='/planet-tota-metaverse' element={<Metaverse />} />
                <Route path='/meet-the-first' element={<MeetTheFirst />} />
                <Route path='/planet-tota-nfts' element={<TotaNfts />} />
                <Route path='/become-a-citizen' element={<BecomeACitizen />} />
            </>
            <Route path='/explore-synergies' element={<ExploreSynergies />} />
            <Route path='/creators-collective' element={<TotaCreators />} />
            <Route path='/about-us' element={<AboutUs />} />
        </Routes>
     );
}

export default MyRoutes;