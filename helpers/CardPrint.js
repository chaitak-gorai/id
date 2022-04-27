import { GetServerSideProps, NextPage } from 'next';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import QRCode from 'react-qr-code';
import Image from 'next/image';
import Head from 'next/head';
import FormatName from '../helpers/FormatName';
import { useReactToPrint } from 'react-to-print';
import img1 from '../images/crescendo-transparent.png';
import img2 from '../images/ESB.png';
import img3 from '../images/RSSDAI.png';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   fetchAdmin,
//   fetchAttendee,
// } from '../../../apis/requests/auth.requests';
// import { IAdmin, IAttendee } from '../../../types';
// import { formatName, parseCookies } from '../../../utils/helpers';
import styles from '../CardPrint.module.scss';
import { async } from 'regenerator-runtime';
import { toPng } from 'html-to-image';

// export const getServerSideProps = async (context) => {
//   // const cookies = parseCookies(context.req);
//   // const { token } = cookies;

//   try {
//     // const [adminResponse, doctorResponse] = await Promise.all([
//     //   // fetchAdmin(token),
//     //   // fetchAttendee(context.params?.id as string, token),
//     // ]);
//     // return {
//     //   props: {
//     //     user: adminResponse.data.user,
//     //     attendee: doctorResponse.data.attendee,
//     //   },
//     // };
//   } catch (err) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }
// };

const CardPrint = React.forwardRef((props) => {
  const ref = useRef();
  const [attendee, setAttendee] = useState();
  const [id, setId] = useState('00022');
  console.log(attendee);
  useEffect(async () => {
    const response = await fetch(
      `https://secret-caverns-07392.herokuapp.com/user/registrationId?registrationId=${id}`
    );
    const d = await response.json();
    setAttendee(d);
    console.log(d);
    console.log(id);
    // onButtonClick();
    handlePrint();
  }, [id]);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${id}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  //   const handlePrint = async () => {
  //     let id = '00001';
  //     const response = await fetch(
  //       `https://secret-caverns-07392.herokuapp.com/user/registrationId?registrationId=${id}`
  //     );
  //     const d = await response.json();
  //     setAttendee(d);
  //     console.log(d);
  //     console.log(id);
  //     id++;
  //   };
  const cardRef = useRef();
  //   const [attendee, setAttendee] = useState({
  //     registrationId: data?.registrationId,
  //     name: data?.name,
  //   });
  //   const [attendee, setAttendee] = useState(data);
  console.log(parseInt(attendee?.registrationId) > 113);
  return (
    <main ref={ref}>
      <Head>
        <title>ID Card | {attendee?.registrationId}</title>
      </Head>
      <div ref={cardRef}>
        <div
          className={classNames(styles.id_card)}
          style={
            parseInt(attendee?.registrationId) > 113
              ? { background: 'linear-gradient(#c8f8a7, #ffffff)' }
              : { background: 'linear-gradient(#ffa3a4, #ffffff)' }
          }
        >
          <div className={classNames(styles.id_card_header)}>
            <div className='d-flex justify-content-between align-items-center w-100'>
              <Image
                src={img3}
                alt='logo'
                width={32}
                height={32}
                layout='fixed'
                objectFit='contain'
              />
              <Image
                src={img2}
                alt='logo'
                width={32}
                height={32}
                layout='fixed'
                objectFit='contain'
              />
            </div>
          </div>
          <div className={classNames(styles.id_card_body)}>
            <div className='d-flex justify-content-center align-items-center'>
              <Image
                src={img1}
                alt='logo'
                width={180}
                height={70}
                layout='fixed'
                objectFit='contain'
              />
            </div>

            <p className={classNames(styles.label)}>
              {'April 28, 29 & 30 2022 | ITC Royal Bengal, Kolkata'}
            </p>
            <p className={classNames(styles.value)}>
              {attendee?.registrationId}
            </p>
            <p className={classNames(styles.name)}>{attendee?.name}</p>

            <div className='d-flex justify-content-center align-items-center'>
              <QRCode
                value={String(attendee?.registrationId)}
                size={80}
                bgColor='#ebf5f1'
              />
            </div>

            <p
              className={classNames(styles.identity)}
              style={
                parseInt(attendee?.registrationId) > 113
                  ? { color: '#0759b9' }
                  : { color: '#55023c' }
              }
            >
              {parseInt(attendee?.registrationId) > 113
                ? 'DELEGATE'
                : 'FACULTY'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
});

export default CardPrint;
