import React from 'react';
import {PacksPage} from "./components/PacksPage/PacksPage";
import {HashRouter, Navigate, Routes, Route} from "react-router-dom";
import {PackPage} from "./components/PackPage/PackPage";

function App() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/packs'}/>}/>
                    <Route path={'/packs'} element={<PacksPage/>}/>
                    <Route path={'/item/*'} element={<PackPage/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
