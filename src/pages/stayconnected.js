import React from 'react'
import Link from 'gatsby-link'
import '../css/bootstrap.css'
import '../css/stayconnected.scss'
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

class StayConnectedPage extends React.Component {
	render() {
		return (
			<div>
				<div className='BlueBox'></div>
			    <PageHeader>
			    	Stay Connected
			    </PageHeader>
				<Panel>
				    <Panel.Body>
					    As the independent publication serving the UC Berkeley campus and the 
					    city of Berkeley, The Daily Californian has a print circulation of 10,000 
					    and additionally reaches more 36,000 students and 22,000 faculty and staff 
					    on campus. The online version, dailycal.org, averages over 800,000 monthly 
					    hits. Stay connected through our events and by liking our Facebook page.
						
						The Daily Californian Alumni Association was created to bring alumni of the 
						newspaper together as well as to provide mentorship and financial support to 
						the current student staff.
				    </Panel.Body>
				</Panel>
				<Button>Like us on Facebook!</Button>
				<Button>Follow us on Twitter!</Button>
				<Panel>
				    <Panel.Heading>Subscribe to the alumni newsletter!</Panel.Heading>
				    <Panel.Body>
				    	Want to stay connected and up to date on what your fellow Daily Cal Alumni 
			    		are up to? Sign up for our free monthly online alumni newsletter below.

						If you would like to contribute to the newsletter by sharing work you have 
						done recently or if you would like us to profile you and your work please 
						contact alumni-newsletter@dailycal.org.
						<FormGroup>
				          <ControlLabel>NAME</ControlLabel>
				          <FormControl
				            type="text"
				            placeholder="first"
				          />
				          <FormControl.Feedback />
				          <FormControl
				            type="text"
				            placeholder="last"
				          />
				          <FormControl.Feedback />

				          <ControlLabel>PHONE</ControlLabel>
				          <FormControl
				            type="text"
				            placeholder="(xxx)xxx-xxxx"
				          />
				        </FormGroup>
				        <Button bsStyle="primary">SIGN UP NOW</Button>
				    </Panel.Body>
				</Panel>
			</div>
		);
	}
}

export default StayConnectedPage
