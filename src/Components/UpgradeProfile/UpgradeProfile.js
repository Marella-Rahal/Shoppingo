import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import AttachmentIcon from '@mui/icons-material/Attachment';
import LSbackground from '../../Images/SignUp2.jpg';
import styled from 'styled-components';

import {
  Overlay,
  Title,
  Span,
  Input,
  Input2,
  Container,
  Rsection,
  Form,
} from '../SignUp/SignUPcss';
import { HLine } from '../LogIn/LogIncss';

export const Lsection = styled.div`
  position: relative;
  width: 50%;
  background-color: #fbf2d1;
  @media (max-width: 770px) {
    width: 100%;
  }
  @media (max-width: 650px) {
    padding-bottom: 220px;
  }
`;

function UpgradeProfile() {
  return (
    <>
      <Navbar />
      <Container>
        <Lsection>
          <img
            src={LSbackground}
            style={{ width: '100%', height: '100%', opacity: '0.4' }}
          />
          <Overlay>
            <Title>
              If you are a Seller you will be fine and your prouducts will be
              selling
            </Title>
            <Span>
              we will help you to discover the world fashion clothes any where
              you are
            </Span>
          </Overlay>
        </Lsection>
        <HLine />
        <Rsection>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginBottom: '25px',
              alignItems: 'center',
            }}
          >
            <div
              style={{ color: '#805F0D', fontWeight: '600', fontSize: '21px' }}
            >
              <AttachmentIcon
                style={{ color: '#1940A4', transform: 'rotate(-35deg)' }}
              />{' '}
              Use the code sent by us to your email if approved
            </div>
            <div
              style={{ color: '#805F0D', fontWeight: '600', fontSize: '21px' }}
            >
              {' '}
              <AttachmentIcon
                style={{ color: '#1940A4', transform: 'rotate(-35deg)' }}
              />{' '}
              Approval may take up to two days for safety
            </div>
          </div>

          <Form>
            <Input
              type="email"
              id="fname"
              name="firstname"
              placeholder="     Enter Your Email Shop"
              style={{ marginBottom: '30px' }}
            ></Input>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="     Enter Your Phone Number"
              style={{ marginBottom: '30px' }}
            ></Input>
            <Input
              type="text"
              id="password"
              name="password"
              placeholder="     Enter Your Shop Name"
              style={{ marginBottom: '30px' }}
            ></Input>
            <Input
              type="text"
              id="password"
              name="password"
              placeholder="     Enter Your Address "
              style={{ marginBottom: '30px' }}
            ></Input>
            <Input2 type="button" style={{ color: '#fff' }}>
              Upgrade
            </Input2>
          </Form>
        </Rsection>
      </Container>
    </>
  );
}
export default UpgradeProfile;
