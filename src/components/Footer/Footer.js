import React from 'react';
import './Footer.css';
import { Link }  from 'react-router-dom';

function Footer() {
    return (
        <>
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <Link to='/sign-up'>Forgot Password ?</Link>
                        <Link to='/sign-in'>Create an Account</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                  <div className="social-icons">
                        <Link class='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                        <i class='fab fa-facebook-f' />
                        </Link>
                        <Link class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                        <i class='fab fa-instagram' />
                        </Link>
                        <Link class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                        <i class='fab fa-twitter' />
                        </Link>
                  </div>
              </div>
            </section>  
        </div>
        </>
    )
}

export default Footer;
