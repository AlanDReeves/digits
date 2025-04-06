'use client';

import { ListGroup } from 'react-bootstrap';
// eslint-disable-next-line @typescript-eslint/quotes, import/extensions
import { Note } from "@prisma/client";

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ note } : { note: Note }) => (
  <ListGroup.Item>
    <p className="fw-lighter">
      {note.createdAt.toLocaleDateString('en-US')}
    </p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

export default ContactCard;
