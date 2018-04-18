import React from 'react'
import Link from 'gatsby-link'

import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Grid from 'react-bootstrap/lib/Grid'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Row from 'react-bootstrap/lib/Row'


const IndexPage = () => (
  <div>
    <Row className="splash">
      <Col xs={12} md={7} className="splash__left">
        <div className="splash__left-text">
          <Row className="splash__left-headline">
            <div className="splash__left-headline">We're an indepdent, student-run newsroom.</div>
          </Row>
          <Row>
            <div className="splash__left-subtitle">The Daily Cal has been 
            delivering ground-breaking news as the voice of Berkeley for 147 years. But now, we need your help.</div>          
          </Row>
          <Row>
            <Button className="splash__left-button">Donate</Button>
          </Row>
        </div>
      </Col>
      <Col xs={12} md={5} className="splash__right"></Col>
    </Row>
    <Row>
      <div>What We Do</div>
    </Row>
  </div>
)

export default IndexPage
