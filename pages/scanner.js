import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { OnResultFunction, QrReader } from 'react-qr-reader';
import FormatName from '../helpers/FormatName';
import classNames from 'classnames';
import styles from '../CardPrint.module.scss';

const Scanner = () => {
  const [colorClass, setColorClass] = React.useState('green');
  const [code, setCode] = React.useState('');

  // const findDoctor = useFindAttendee(code);

  const handleOnScan = async (result, error) => {
    if (result != undefined) {
      const texts = result.getText();

      const regex = /^\d+$/;

      // console.log(code, regex.test(code));

      if (regex.test(texts)) {
      }
      setCode(texts);
      console.log(code, 'data');

      const formdat = {
        registrationId: result.text,
        milestone: 'workshop',
      };
      console.log(formdat);
      const response = await fetch(
        'https://secret-caverns-07392.herokuapp.com/user/update',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: formdat,
        }
      );
      const d = await response.json();

      console.log(d);
      console.log(result.text, 'result');
      console.log(texts, 'tetstd');
      if (error) {
        // console.info(error);
        console.log('error');
      }
    }
  };
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

      <Card body className='m-3'>
        <h3 className='text-primary'>
          <span className='text-muted'>ID:</span>
        </h3>
        <hr />

        <p className='mb-0'>
          <small className='text-muted'>Name</small>
        </p>
        <p>
          {FormatName(
            // findDoctor.data?.firstName,
            // findDoctor.data?.middleName,
            // findDoctor.data?.lastName
            'cap',
            'cha',
            'chap'
          )}
        </p>
      </Card>
    </main>
  );
};

export default Scanner;
