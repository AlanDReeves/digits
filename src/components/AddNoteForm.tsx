/* eslint-disable import/extensions */

'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addNote } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddNoteSchema } from '@/lib/validationSchemas';

const onSubmit = async (data:
{ note: string, contactID: number, owner: string }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addNote(data);
  swal('Success', 'Your note has been added', 'success', {
    timer: 2000,
  });
};

const AddNoteForm = ({ contactID }: { contactID: number }) => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddNoteSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center">
            <h2>Add Note</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Note</Form.Label>
                      <input
                        type="text"
                        {...register('note')}
                        className={`form-control ${errors.note ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.note?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <input type="hidden" {...register('owner')} value={currentUser} />
                <input type="hidden" {...register('contactID')} value={contactID} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNoteForm;
