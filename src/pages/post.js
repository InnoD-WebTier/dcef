import React from 'react'
import Link from 'gatsby-link'
// import '../css/bootstrap.css'
import '../css/post.scss'

class PostPage extends React.Component {
	render() {
		return (
			<div>
				<div className='BlueBox'></div>
			    <div>Post Page</div>
			    <div>
				    As the independent publication serving the UC Berkeley campus and the 
				    city of Berkeley, The Daily Californian has a print circulation of 10,000 
				    and additionally reaches more 36,000 students and 22,000 faculty and staff 
				    on campus. The online version, dailycal.org, averages over 800,000 monthly 
				    hits. Stay connected through our events and by liking our Facebook page.
					
					The Daily Californian Alumni Association was created to bring alumni of the 
					newspaper together as well as to provide mentorship and financial support to 
					the current student staff.
				</div>
				<div className='media-button'>
					<div className='media-title'>Like us on Facebook!</div>
				</div>
			    <div className='media-button'>
			    	<div className='media-title'>Follow us on Twitter!</div>
			    </div>
			    <div className='media-box'>
			    	<div className='media-title'>Subscribe to the alumni newsletter!</div>
			    	<div>
			    		Want to stay connected and up to date on what your fellow Daily Cal Alumni 
			    		are up to? Sign up for our free monthly online alumni newsletter below.

						If you would like to contribute to the newsletter by sharing work you have 
						done recently or if you would like us to profile you and your work please 
						contact alumni-newsletter@dailycal.org.
			    	</div>
			    	<div>(probably a form react component?)</div>
			    	<div>SIGN UP NOW</div>
			    </div>
			    <Link to="/page-2/">Go to page 2</Link>
			    <div className='footer'></div>
			</div>
		);
	}
}

export default PostPage