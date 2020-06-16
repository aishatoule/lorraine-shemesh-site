import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavigationMenuItems from './NavigationMenuItems';
import Burger from './navigation/Burger';

const Navigation = () => {
    const [open, setOpen] = useState(false); 
    const isMobile = window.innerWidth < 768;

    

    const handleLogoClick = () => {
        const isMobile = window.innerWidth < 768;
        if (isMobile === true && open === true) {
            setOpen(!open);
        }
    }

    var lorraineNameLogo = isMobile 
    ? 
    <div className="lorraine-shemesh-logo">
        <Link to="/" onClick={handleLogoClick}>
            <h2 className="uppercase"><b>Lorraine<br />Shemesh</b></h2> 
        </Link>
    </div>
    :
    <div className="lorraine-shemesh-logo">
        <Link to="/" onClick={() => setOpen(!open)}>
            <h2 className="uppercase"><b>Lorraine<br />Shemesh</b></h2> 
        </Link>
    </div>
    return (
        <div className="navigation-menu">
            <div className="navigation-header">
                {lorraineNameLogo}
                <div className="hide-on-desktop">
                    <Burger open={open} setOpen={setOpen}/>
                </div>
            </div>
            <div className="hide-on-desktop">
                <NavigationMenuItems open={open} setOpen={setOpen}/>
            </div>
            <div className="hide-on-mobile">
                <NavigationMenuItems/>
            </div>
        </div>
    )
    
}

export default Navigation;