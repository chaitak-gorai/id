import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import classNames from 'classnames';
import styles from '../Database.module.scss';

const Datasheet = () => {
  const [data, setData] = useState(null);
  useEffect(async () => {
    await fetch('https://secret-caverns-07392.herokuapp.com/user/all')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data === null)
    return (
      <ReactLoading
        className={classNames(styles.loaderWrapper)}
        type={'bars'}
        color={'#1b8dff'}
        // style={{
        //   position: 'absolute',
        //   top: '50%',
        //   left: '50%',
        //   transform: 'translate(-50%, -50%)',
        // }}
      />
    );
  //   else
  return (
    <>
      <Container className='py-5'>
        <Row>
          <Col md={3} className='py-2 text-center font-weight-600'>
            Workshop:{' '}
            {data ? data.filter((item) => item.workshop === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            Welcome Kit:{' '}
            {data ? data.filter((item) => item.welcomeKit === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            28th Entry:{' '}
            {data ? data.filter((item) => item.entry28 === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            29th Entry:{' '}
            {data ? data.filter((item) => item.entry29 === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            30th Entry:{' '}
            {data ? data.filter((item) => item.entry30 === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            28th Workshop:{' '}
            {data ? data.filter((item) => item.workshop28 === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            28th Dinner:{' '}
            {data ? data.filter((item) => item.dinner28 === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            29th Dinner:{' '}
            {data ? data.filter((item) => item.dinner29 === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            30th Lunch{' '}
            {data ? data.filter((item) => item.lunch30 === true).length : 0}
          </Col>
          <Col md={3} className='py-2 text-center font-weight-600'>
            30th Dinner:{' '}
            {data ? data.filter((item) => item.dinner30 === true).length : 0}
          </Col>
        </Row>
      </Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {data &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((value, key) => {
              return (
                <tr>
                  <th key={key + 1}>{key + 1}</th>
                  {Object.keys(value)
                    .slice(1, Object.keys(value).length)
                    .map((key) => (
                      <td key={key + 1}>
                        {typeof value[key] === 'string'
                          ? value[key] === 'NaN'
                            ? '-'
                            : value[key]
                          : typeof value[key] === 'boolean'
                          ? value[key]
                            ? 'Yes'
                            : 'No'
                          : value[key]}
                      </td>
                    ))}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default Datasheet;
