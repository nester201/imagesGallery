'use client';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Button, Input } from '@/theme/styles';
import { ifProp } from 'styled-tools';
import colors from '@/theme/colors';
import useToggle from '@/hooks/useToggle';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from '@/interfaces/IUser';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectImages } from '@/redux/images/selectors';

const Auth = () => {
  const { control, handleSubmit, ...others } = useForm<IUser>();
  const { on, toggle } = useToggle(true);
  const page = useSelector(selectImages.getCurrenPage);
  const { registerUser, authenticateUser } = useAuth();

  const onSubmit: SubmitHandler<IUser> = useCallback(
    async data => {
      if (on) {
        await registerUser(data);
      } else {
        await authenticateUser(data);
      }
    },

    [on, registerUser, authenticateUser]
  );

  return (
    <Container>
      <FormProvider control={control} handleSubmit={handleSubmit} {...others}>
        <Wrapper>
          <WrapperActions>
            <Action onClick={toggle} $active={on}>
              Sign up
            </Action>
            <Action onClick={toggle} $active={!on}>
              Log in
            </Action>
          </WrapperActions>
          <Fields>
            <Controller
              control={control}
              name={'username'}
              defaultValue={''}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} placeholder={'Nickname'} />}
            />
            <Controller
              control={control}
              defaultValue={''}
              name={'password'}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} placeholder={'Password'} type={'password'} />}
            />
          </Fields>
          <Button onClick={handleSubmit(onSubmit)} type="submit">
            <Link href={`/gallery/${page.toString()}`}>{on ? 'Sign up' : 'Log in'}</Link>
          </Button>
        </Wrapper>
      </FormProvider>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.form`
  width: 460px;
  height: 616px;
  padding: 10px 67px 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.15);
  overflow-y: auto;

  @media (max-width: 767px) {
    border-radius: 0;
    width: 100vw;
    height: 100vh;
    padding: 55px 10px 20px;
  }
`;

const WrapperActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Action = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  font-size: 20px;
  color: ${colors.text};

  ${ifProp(
    '$active',
    css`
      color: ${colors.primary};
    `
  )};
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
