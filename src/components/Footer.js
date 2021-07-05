import React from 'react';
import './Footer.css';import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Performance like no smartphone before it
                </p>
                <p className='footer-subscription-text'>
                    Stay in the Loop?	
                </p>
                <ul>
                    <button className="btn" onClick={() => openInNewTab('https://www.facebook.com/SamsungIndia')}><i className="fa fa-facebook-square" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://twitter.com/samsungindia')}><i className="fa fa-twitter-square" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://www.instagram.com/samsungindia/')}><i className="fa fa-instagram" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://www.youtube.com/user/Samsungmobileindia')}><i className="fa fa-youtube-play" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://www.linkedin.com/company/samsung-india')}><i className="fa fa-linkedin-square" style={{fontSize:24}}></i></button>
                    <button className="btn" onClick={() => openInNewTab('https://api.whatsapp.com/send?phone=91180057267864&text=&source=&data=')}><i className="fa fa-whatsapp" style={{fontSize:24}}></i></button>
                </ul>
            </section>
        </div>
    );
}

export default Footer;