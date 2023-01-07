import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';

const LeftTab = () => {
   return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className='mt-5'>
          <Col sm={3}>
           <div className='left-tab '>
           <Nav variant="pills"  className="flex-column" >
              <Nav.Item >
                <Nav.Link eventKey="first" >Mission</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Vission</Nav.Link>
              </Nav.Item>
            </Nav>
           </div>
          </Col>
          <Col sm={9}>
            <Tab.Content >
              <Tab.Pane eventKey="first">
               <p>To provide an Integreted Curriculam for our students in which they acheive
               academic success,personal growth, become socially responsible and active global citizens with an appreciation of learning as a lifelong process and adopting teaching technics on real life example.  </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <p>To  build and maintain the most efficient education system for the future leaders that promote academic acheivements, leadership, Islamic and social values which make them a practising muslim.</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );

};

export default LeftTab;