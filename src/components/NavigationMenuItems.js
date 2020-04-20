import React, { useState } from 'react';
import { bool } from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationMenuItems = ({ open, setOpen }) => {

    const [openPaintSubMenu, setPaintOpenSubMenu] = useState(false);
    const [openPaperSubMenu, setPaperOpenSubMenu] = useState(false);
    const [openClaySubMenu, setClayOpenSubMenu] = useState(false);


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
        openClaySubMenu === true &&
            setPaintOpenSubMenu(!openPaintSubMenu);
    }

    var revealClaySubMenuItems = '';
    if(!openClaySubMenu) {
        revealClaySubMenuItems = 'hide';
    }
    

    return (
        <div className={`nav-menu-list ${revealMenuClass}`} open={open}>
            <ul>
                <li className="nav-menu-item"><button onClick={() => togglePaintSubMenu()}>Paint</button></li>
                    <ul className={`section-sub-menu ${revealPaintSubMenuItems}`}>
                    <NavLink to="/spaceBetweenUs" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">The Space Between Us</li></NavLink>
                    <NavLink to="/insideOut" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Inside Out</li></NavLink>
                    <NavLink to="/breakingTheSurface" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Breaking The Surface</li></NavLink>
                    <NavLink to="/liquidStates" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Liquid States</li></NavLink>
                    <NavLink to="/waterWorks" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Water-Works</li></NavLink>
                    <NavLink to="/paintedPools" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Painted Pools</li></NavLink>
                    </ul>

                <li className="nav-menu-item"><button onClick={() => togglePaperSubMenu()}>Paper</button></li>
                    <ul className={`section-sub-menu ${revealPaperSubMenuItems}`}>
                    <NavLink to="/" onClick={handleClick}><li className="sub-nav-menu-item">Pools</li></NavLink>
                    <NavLink to="/" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">The Space Between Us</li></NavLink>
                    <NavLink to="/" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Intersections</li></NavLink>
                    <NavLink to="/" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Objects & Food</li></NavLink>
                    </ul>

                <li className="nav-menu-item"><button onClick={() => toggleClaySubMenu()}>Clay</button></li>
                    <ul className={`section-sub-menu ${revealClaySubMenuItems}`}>
                    <NavLink to="/" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Liquid States</li></NavLink>
                    <NavLink to="/" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Water-Works</li></NavLink>
                    <NavLink to="/" activeClassName="active" onClick={handleClick}><li className="sub-nav-menu-item">Painted Pools</li></NavLink>
                    </ul>

                <NavLink to="/video" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Video</button></li></NavLink>
                <NavLink to="/news" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>News</button></li></NavLink>
                <NavLink to="/exhibition" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Exhibitions</button></li></NavLink>
                <NavLink to="/biography" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Biography</button></li></NavLink>
                <NavLink to="/words" activeClassName="active" onClick={handleClick}><li className="nav-menu-item"><button>Words</button></li></NavLink>
                <NavLink to="/contact" activeClassName="active" onClick={handleClick}><li className="nav-menu-item" style={{color: "#FFF"}}><button>Contact</button></li></NavLink>
            </ul>
        </div>
    )
    
}


NavigationMenuItems.propTypes = {
    open: bool.isRequired,
    setOpen: bool.isRequired
}

export default NavigationMenuItems;