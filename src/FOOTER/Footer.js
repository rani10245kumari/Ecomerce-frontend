
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        Founded in 2023, RK began as a one of the best shopping website with a wide range of all products. Our journey started with a vision to provide the product as cheapest rate in th market and value for money. Over the years, we have grown and evolved, always keeping our commitment to quality, innovation, customer satisfaction, etc.at the forefront.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/clothes">Clothes</a></li>
                        <li><a href="/Mobile">Mobile</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                {/* <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div> */}
                <div className="Socialmedia">
                    <a href="https://www.facebook.com/ruhi.verma.1000469?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <img className="sicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU" alt="Not Found" />
                    </a>

                    <a href="https://github.com/rani10245kumari" target="_blank" rel="noopener noreferrer">
                        <img className="sicon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='Not Found' />
                    </a>

                    <a href="http://instagram.com/ranik9070/" target="_blank" rel="noopener noreferrer">
                        <img className='sicon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs1LETqnEyuX9xvRmPjHK7ulEtLeXSpYLHQ&usqp=CAU" alt='Not Found' />
                    </a>

                    <a href="www.linkedin.com/in/rani-kumari-001119256" target="_blank" rel="noopener noreferrer">
                        <img className="sicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zTyVz8gyeFBXNFNC_TJ2mdKZXMUiY6LoFg&usqp=CAU" alt="Not Found" />
                    </a>

                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2023 RK .
            </div>
        </div>
    );
};

export default Footer;
