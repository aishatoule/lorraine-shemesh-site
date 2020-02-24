import React, { useState } from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

const NavigationMenuItems = ({ open, setOpen }) => {

    const [openPaintSubMenu, setPaintOpenSubMenu] = useState(false);
    const [openPaperSubMenu, setPaperOpenSubMenu] = useState(false);
    const [openClaySubMenu, setClayOpenSubMenu] = useState(false);

    if (!open) {
        var revealMenuClass ='';
        revealMenuClass= 'hide-on-mobile';
    }

    const togglePaintSubMenu = () => {
        setPaintOpenSubMenu(!openPaintSubMenu)
        openPaperSubMenu === true && 
            setPaperOpenSubMenu(!openPaperSubMenu)
        openClaySubMenu === true &&
            setClayOpenSubMenu(!openClaySubMenu)        
    }

    var revealPaintSubMenuItems = '';
    if(!openPaintSubMenu) {
        revealPaintSubMenuItems = 'hide'
    }

    const togglePaperSubMenu = () => {
        setPaperOpenSubMenu(!openPaperSubMenu)
        openPaintSubMenu === true &&
            setPaintOpenSubMenu(!openPaintSubMenu)
        openClaySubMenu === true &&
            setClayOpenSubMenu(!openClaySubMenu)
    }

    var revealPaperSubMenuItems = '';
    if(!openPaperSubMenu) {
        revealPaperSubMenuItems = 'hide'
    }

    const toggleClaySubMenu = () => {
        setClayOpenSubMenu(!openClaySubMenu)
        openPaperSubMenu === true &&
            setPaperOpenSubMenu(!openPaperSubMenu)
        openClaySubMenu === true &&
            setClayOpenSubMenu(!openClaySubMenu)
    }

    var revealClaySubMenuItems = '';
    if(!openClaySubMenu) {
        revealClaySubMenuItems = 'hide'
    }
    

    return (
        <div className={`nav-menu-list ${revealMenuClass}`} open={open}>
            <ul>
                <li className="nav-menu-item"><button onClick={() => togglePaintSubMenu()}>Paint</button></li>
                    <ul className={`section-sub-menu ${revealPaintSubMenuItems}`}>
                    <Link to="/spaceBetweenUs"><li className="sub-nav-menu-item">The Space Between Us</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Inside Out</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Breaking The Surface</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Liquid States</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Water-Works</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Painted Pools</li></Link>
                    </ul>

                <li className="nav-menu-item"><button onClick={() => togglePaperSubMenu()}>Paper</button></li>
                    <ul className={`section-sub-menu ${revealPaperSubMenuItems}`}>
                    <Link to="/"><li className="sub-nav-menu-item">Pools</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">The Space Between Us</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Intersections</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Objects & Food</li></Link>
                    </ul>

                <li className="nav-menu-item"><button onClick={() => toggleClaySubMenu()}>Clay</button></li>
                    <ul className={`section-sub-menu ${revealClaySubMenuItems}`}>
                    <Link to="/"><li className="sub-nav-menu-item">Liquid States</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Water-Works</li></Link>
                    <Link to="/"><li className="sub-nav-menu-item">Painted Pools</li></Link>
                    </ul>

                <Link to="/video"><li className="nav-menu-item">Video</li></Link>
                <Link to="/news"><li className="nav-menu-item">News</li></Link>
                <Link to="/exhibition"><li className="nav-menu-item">Exhibitions</li></Link>
                <Link to="/biography"><li className="nav-menu-item">Biography</li></Link>
                <Link to="/words"><li className="nav-menu-item">Words</li></Link>
                <Link to="/contact"><li className="nav-menu-item">Contact</li></Link>
            </ul>
        </div>
    )
    
}


NavigationMenuItems.propTypes = {
    open: bool.isRequired,
    setOpen: bool.isRequired
}

export default NavigationMenuItems;