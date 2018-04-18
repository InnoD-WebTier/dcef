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
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class StayConnectedPage extends React.Component {
	render() {
		return (
			<div>
				<div className='blue_box'></div>
			    <PageHeader className='page_title'>
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
				<Button bsSize="large" className="button_title"><h3>Like us on Facebook!</h3></Button>
				<Button bsSize="large" className="button_title"><h3>Follow us on Twitter!</h3></Button>
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
				            placeholder="First"
				          />
				          <FormControl.Feedback />
				          <FormControl
				            type="text"
				            placeholder="Last"
				          />
				          <FormControl.Feedback />

				          <ControlLabel>PHONE</ControlLabel>
				          <FormControl
				            type="text"
				            placeholder="(xxx)xxx-xxxx"
				          />
				          <FormControl.Feedback />

				          <ControlLabel>EMAIL</ControlLabel>
				          <FormControl
				            type="text"
				            placeholder="Email"
				          />
				          <FormControl.Feedback />

				          <ControlLabel>ADDRESS</ControlLabel>
				          <FormControl
				            type="text"
				            placeholder="Street Address"
				          />
				          <FormControl.Feedback />
				          <FormControl
				            type="text"
				            placeholder="Address Line 2"
				          />
				          <FormControl.Feedback />
				          <FormControl
				            type="text"
				            placeholder="City"
				          />
				          <FormControl.Feedback />
				          <FormControl
				            type="text"
				            placeholder="State/Province/Region"
				          />
				          <FormControl.Feedback />
				          <FormControl
				            type="text"
				            placeholder="ZIP/Postal Code"
				          />
				          <FormControl.Feedback />
				          <DropdownButton
						      bsSize="small"
						      title="Country"
						      id="dropdown-size-small"
						    >
						      <MenuItem eventKey="1">Action</MenuItem>
						      <MenuItem eventKey="2">Another action</MenuItem>
						      <MenuItem eventKey="3">Something else here</MenuItem>
						      <MenuItem divider />
						      <MenuItem eventKey="4">Separated link</MenuItem>
						  </DropdownButton>
				        </FormGroup>
				        <Button bsStyle="primary">SIGN UP NOW</Button>
				    </Panel.Body>
				</Panel>
			</div>
		);
	}
}

export default StayConnectedPage
