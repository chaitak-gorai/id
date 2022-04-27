import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap';
import { OnResultFunction, QrReader } from 'react-qr-reader';
import FormatName from '../helpers/FormatName';
import classNames from 'classnames';
import styles from '../CardPrint.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Scanner = () => {
  const [colorClass, setColorClass] = React.useState('green');
  const [userData, setUserData] = React.useState({});
  const [milestone, setMilestone] = React.useState(null);
  const [isAllowed, setIsAllowed] = React.useState(null);
  const [registrationId, setRegistrationId] = React.useState(null);
  const [userName, setUserName] = React.useState(null);

  const [code, setCode] = React.useState('');
  const handleReset = () => {
    setIsAllowed(null);
    setRegistrationId(null);
    setUserName(null);
  };

  // const findDoctor = useFindAttendee(code);
  const onChangeValue = (e) => {
    e.preventDefault();
    const mile = e.target.value;
    setMilestone(mile);
  };
  const handleOnScan = async (result, error) => {
    if (result != undefined) {
      const texts = result.getText();

      const regex = /^\d+$/;

      setRegistrationId(result.text);
      if (error) {
        console.error(error);
      }
    }
  };

  React.useEffect(async () => {
    if (milestone && registrationId) {
      const formData = {
        registrationId,
        milestone,
      };
      const query = new URLSearchParams();

      Object.keys(formData).forEach((key) => {
        query.append(key, formData[key]);
      });
      console.log(formData, 'formData');
      await fetch(
        `https://secret-caverns-07392.herokuapp.com/user/update?${query}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.responseCode == 200) {
            setIsAllowed({ status: true });
          } else {
            setIsAllowed({ status: false });
          }
          setUserData({
            status: res.responseCode,
            ...res.user,
          });
          setUserName(res.user?.name);
        });
    }
  }, [(milestone, registrationId)]);

  console.log(userData);

  const MILESTONES = [
    'workshop',
    'registration',
    'welcomeKit',
    'entry28',
    'entry29',
    'entry30',
    'workshop28',
    'dinner28',
    'lunch29',
    'dinner29',
    'lunch30',
    'dinner30',
  ];
  console.log(milestone);
  return (
    <main>
      <Head>
        <title>Scanner</title>
      </Head>
      <div className={classNames(`styles.${colorClass}`)}>
        <QrReader
          onResult={handleOnScan}
          constraints={{ facingMode: 'environment' }}
          containerStyle={{
            maxWidth: '660px',
          }}
        />
      </div>

      <Container className='milestone-wrapper'>
        <Row>
          {MILESTONES.map((entity) => (
            <Col className='col-6' key={entity}>
              <input
                type='radio'
                name='sel'
                id={entity}
                value={entity}
                checked={entity === milestone}
                onChange={onChangeValue}
              />
              <label htmlFor={entity}>{entity}</label>
            </Col>
          ))}
        </Row>
      </Container>
      <Card body className='m-3'>
        <h3 className='text-primary'>
          <span className='text-muted'>ID: {registrationId}</span>
        </h3>
        <hr />

        <p className='mb-0'>
          <small className='text-muted'>Name </small>
        </p>
        <p>{userName}</p>
        <p className='mb-0'>
          <small className='text-muted'>Verify:</small>
        </p>
        <div>
          {isAllowed ? (
            isAllowed.status ? (
              <p>Allowed</p>
            ) : (
              <p>Not Allowed</p>
            )
          ) : (
            <br />
          )}
        </div>
        <button className='btn btn-primary' onClick={handleReset}>
          Re Scan
        </button>
      </Card>
    </main>
  );
};

export default Scanner;
