'use client';

import { Card, Image } from 'react-bootstrap';
// eslint-disable-next-line @typescript-eslint/quotes, import/extensions
import { Contact } from "@/lib/validationSchemas";

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ firstName, lastName, image, address, description }: Contact) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={image} width={75} />
      <Card.Title>
        {firstName}
        {lastName}
      </Card.Title>
      <Card.Subtitle>
        {address}
      </Card.Subtitle>
    </Card.Header>
    <Card.Text>
      {description}
    </Card.Text>
  </Card>
);

export default ContactCard;
