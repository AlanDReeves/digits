import { Col, Container, Row } from 'react-bootstrap';
import { Calendar2CheckFill, FileEarmark, PeopleFill } from 'react-bootstrap-icons';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Row className="align-middle text-center">
        <Col>
          <PeopleFill size={100} />
          <h1>
            Address Book
          </h1>
          <h5>
            This address book enables any number of users to register and save their business contacts.
            You can only see the contacts you have created.
          </h5>
        </Col>
        <Col>
          <FileEarmark size={100} />
          <h1>
            Contancts
          </h1>
          <h5>
            For each contact, you can save their name, address, and phone number.
          </h5>
        </Col>
        <Col>
          <Calendar2CheckFill size={100} />
          <h1>
            Notes
          </h1>
          <h5>
            Each time you make contact with a contact, you can write a note that summarizes the conversation.
            This note is saved along with a timestamp with the contact.
          </h5>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
