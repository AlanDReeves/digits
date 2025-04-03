'use client';

import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/quotes, import/extensions
import { Contact } from "@prisma/client";

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact } : { contact: Contact }) => (
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
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
