import React from 'react'

import './Footer.css';

function Footer(props) {

    return(
        <footer className="footer">
            <span>
                Desenvolvido com <i className="fa fa-heart text-danger"></i> por aluna da
                 <strong> Cod<span className="text-danger">3</span>r</strong>
            </span>
        </footer>
    );
}

export default Footer;