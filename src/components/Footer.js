import React from 'react';


const Footer = () => {
	return (
		<div className='footer'>	
			<div className='footer__section footer__section--buy'>
				<h2>Runing out of products?</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<span className='footer__button'>Buy now &#707;</span>
			</div>
			<div className='footer__section footer__section--mobile'>
				<h2>Bod&#9679;&#275; Trainer in your pocket</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<div className='footer__buttons'>
					<span className='footer__button'>iOS &#707;</span>
					<span className='footer__button'>Android &#707;</span>
				</div>
			</div>
			<div className='footer__section footer__section--faq'>
				<h2>Frequently asked questions</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<span className='footer__button'>Read FAQs &#707;</span>
			</div>
		</div>
	);
} 
export default Footer;