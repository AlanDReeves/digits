'use client';

import { Card, Image, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import NoteItem from '@/components/NoteItem';
// eslint-disable-next-line @typescript-eslint/quotes, import/extensions
import { Contact, Note } from "@prisma/client";
import AddNoteForm from './AddNoteForm';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
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
      <AddNoteForm contactID={contact.id} />
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
