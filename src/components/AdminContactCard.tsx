'use client';

import { Card, Image, ListGroup } from 'react-bootstrap';
// eslint-disable-next-line @typescript-eslint/quotes, import/extensions
import { Contact, Note } from "@prisma/client";
import NoteItem from './NoteItem';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const AdminContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        {' '}
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>
        {contact.address}
      </Card.Subtitle>
    </Card.Header>
    <Card.Text>
      {contact.description}
    </Card.Text>
    <Card.Footer>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
      <p className="blockquote-footer">
        { contact.owner }
      </p>
    </Card.Footer>
  </Card>
);

export default AdminContactCard;
