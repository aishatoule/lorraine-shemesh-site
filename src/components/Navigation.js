import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationMenuItems from './NavigationMenuItems';
import Burger from './navigation/Burger';

const Navigation = () => {
    const [open, setOpen] = useState(false); 
    return (
        <div className="navigation-menu">
            <div className="navigation-header">
                <div className="lorraine-shemesh-logo">
                    <Link to="/" onClick={() => setOpen(!open)}>
                    <h2 className="uppercase"><b>Lorraine</b></h2>
                    <h2 className="uppercase"><b>Shemesh</b></h2> 
                    </Link>
                </div>
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