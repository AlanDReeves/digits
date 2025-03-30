'use client';

import { Card, Image } from 'react-bootstrap';
// eslint-disable-next-line import/extensions
import { Contact } from '@/lib/validationSchemas';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.Image} width={75} />
      <Card.Title>
        {contact.firstName}
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>
        {contact.address}
      </Card.Subtitle>
    </Card.Header>
    <Card.Text>
      {contact.description}
    </Card.Text>

  </Card>
);

export default ContactCard;
