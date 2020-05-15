import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/navbar.scss';

class MenuUi extends React.Component {
    render() {
        return <div id="navMain" class="navbar-menu">
            <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                    <span className="navbar-item"><a class="button is-danger">Link Builder</a></span>
                    <span className="navbar-item"><a class="button is-danger">Message Builder</a></span>
                    <span className="navbar-item"><a class="button is-danger">Link Tracker&nbsp;<FontAwesomeIcon icon={['fa', 'unlock']} /><span class="fa fa-key"></span></a></span>
                </div>
                <div className="navbar-end">
                    <span className="navbar-item">
                        <a className="button is-danger">Sign Up</a>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default MenuUi;
