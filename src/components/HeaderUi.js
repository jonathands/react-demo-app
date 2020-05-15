import React from 'react';
import logo from '../assets/media.loop.logo.svg';
import MenuUi from './MenuUi';

class HeaderUi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://www">
                    <img src={logo} alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                
                <MenuUi />
            </div>
        </nav>;
    }
}

export default HeaderUi;