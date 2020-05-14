import React from 'react';
import logo from '../assets/media.loop.logo.svg';

class HeaderUi extends React.Component {
    render() {
        return <header className="sharer-header">
            <img src={logo} className="sharer-logo" alt="logo"  />
        </header>;
    }
}

export default HeaderUi;