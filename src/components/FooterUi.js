import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/footer.scss';

class FooterUi extends React.Component {
    render() {
        return <footer>
            <footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                        <p>
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a> | <a href="https://creativecommons.org/licenses/by/4.0/"><span className="corruptedCopyleft">&copy;</span></a>
                        </p>
                        <p>
                            <a href="https://bulma.io">
                                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                            </a>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                            <FontAwesomeIcon icon={['fab', 'react']} />
                        </p>
                    </div>
                </div>
            </footer>
        </footer>
    }
}

export default FooterUi;