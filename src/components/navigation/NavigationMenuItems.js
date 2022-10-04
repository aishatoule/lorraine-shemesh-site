import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationMenuItems = ({ open, setOpen }) => {

    const [openPaintSubMenu, setPaintOpenSubMenu] = useState(false);
    const [openPaperSubMenu, setPaperOpenSubMenu] = useState(false);
    const [openClaySubMenu, setClayOpenSubMenu] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            setOpen(!open);
        }
    }

    if (!open) {
        var revealMenuClass = '';
        revealMenuClass = 'hide-on-mobile';
    }

    const togglePaintSubMenu = () => {
        setPaintOpenSubMenu(!openPaintSubMenu);
        openPaperSubMenu === true && 
            setPaperOpenSubMenu(!openPaperSubMenu);
        openClaySubMenu === true &&
            setClayOpenSubMenu(!openClaySubMenu);     
    }

    var revealPaintSubMenuItems = '';
    if(!openPaintSubMenu) {
        revealPaintSubMenuItems = 'hide';
    }

    const togglePaperSubMenu = () => {
        setPaperOpenSubMenu(!openPaperSubMenu);
        openPaintSubMenu === true &&
            setPaintOpenSubMenu(!openPaintSubMenu);
        openClaySubMenu === true &&
            setClayOpenSubMenu(!openClaySubMenu);
    }

    var revealPaperSubMenuItems = '';
    if(!openPaperSubMenu) {
        revealPaperSubMenuItems = 'hide';
    }

    const toggleClaySubMenu = () => {
        setClayOpenSubMenu(!openClaySubMenu);
        openPaperSubMenu === true && 
            setPaperOpenSubMenu(!openPaperSubMenu);
        openPaintSubMenu === true &&
            setPaintOpenSubMenu(!openPaintSubMenu);
    }

    var revealClaySubMenuItems = '';
    if(!openClaySubMenu) {
        revealClaySubMenuItems = 'hide';
    }

    if(location.pathname === '/spaceBetweenUs' || location.pathname === '/intersections' || location.pathname === '/insideOut' || location.pathname === '/breakingTheSurface' || location.pathname === '/liquidStates' || location.pathname === '/waterWorks' || location.pathname === '/paintedPools') {
        revealPaintSubMenuItems = '';  
    }

    if(location.pathname === '/paperPools' || location.pathname === '/paperSpaceBetweenUs' || location.pathname === '/paperIntersections' || location.pathname === '/paperObjects') {
        revealPaperSubMenuItems = '';  
    }

    if(location.pathname === '/clayHandBuilt' || location.pathname === '/clayWheelThrown' || location.pathname === '/claySlipcast') {
        revealClaySubMenuItems = '';  
    }

    return (
        <div className={`nav-menu-list ${revealMenuClass}`} open={open}>
            <ul>
                <li className="nav-menu-item"><button onClick={() => togglePaintSubMenu()}>Paint</button></li>
                    <ul className={`section-sub-menu ${revealPaintSubMenuItems}`}>
                    <NavLink to="/holdingOn" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Holding On</li></NavLink>
                    <NavLink to="/spaceBetweenUs" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">The Space Between Us</li></NavLink>
                    <NavLink to="/intersections" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Intersections</li></NavLink>
                    <NavLink to="/insideOut" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Inside Out</li></NavLink>
                    <NavLink to="/breakingTheSurface" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Breaking The Surface</li></NavLink>
                    <NavLink to="/liquidStates" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Liquid States</li></NavLink>
                    <NavLink to="/waterWorks" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Water-Works</li></NavLink>
                    <NavLink to="/paintedPools" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Painted Pools</li></NavLink>
                    </ul>

                <li className="nav-menu-item"><button onClick={() => togglePaperSubMenu()}>Paper</button></li>
                    <ul className={`section-sub-menu ${revealPaperSubMenuItems}`}>
                    <NavLink to="/paperPools" onClick={handleClick}><li className="sub-nav-menu-item">Pools</li></NavLink>
                    <NavLink to="/paperSpaceBetweenUs" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">The Space Between Us</li></NavLink>
                    <NavLink to="/paperIntersections" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Intersections</li></NavLink>
                    <NavLink to="/paperObjects" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Objects</li></NavLink>
                    </ul>

                <li className="nav-menu-item"><button onClick={() => toggleClaySubMenu()}>Clay</button></li>
                    <ul className={`section-sub-menu ${revealClaySubMenuItems}`}>
                    <NavLink to="/clayHandBuilt" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Hand Built</li></NavLink>
                    <NavLink to="/clayWheelThrown" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Wheel Thrown</li></NavLink>
                    <NavLink to="/claySlipcast" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Slipcast</li></NavLink>
                    </ul>

                <NavLink to="/video" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Video</button></li></NavLink>
                <NavLink to="/news" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>News</button></li></NavLink>
                <NavLink to="/studio" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Studio</button></li></NavLink>
                <NavLink to="/exhibitions" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Exhibitions</button></li></NavLink>
                <NavLink to="/biography" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Biography</button></li></NavLink>
                <NavLink to="/words" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Words</button></li></NavLink>
                <NavLink to="/contact" activeClassName="active" onClick={handleClick}><li className="nav-menu-item" style={{color: "#FFF"}}><button>Contact</button></li></NavLink>
            </ul>
        </div>
    )
}

export default NavigationMenuItems;