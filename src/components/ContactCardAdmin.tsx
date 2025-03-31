'use client';

import { Card, Image } from 'react-bootstrap';
// eslint-disable-next-line @typescript-eslint/quotes, import/extensions
import { Contact } from "@prisma/client";

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCardAdmin = ({ firstName, lastName, image, address, description, owner }: Contact) => (
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
    <Card.Footer className="blockquote-footer">
      {owner}
    </Card.Footer>
  </Card>
);

export default ContactCardAdmin;
