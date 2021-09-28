import { useAuth } from 'hooks/useAuth';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import Logo from 'components/molecules/Logo/Logo';
import { FormWrapper, Form, FormTitle, LogoWrapper, ButtonForm } from 'views/UnauthenticatedApp.styles';

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(auth.signIn)}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <FormTitle as="h3">Sign in</FormTitle>
        <FormField label="Login" name="login" id="login" {...register('login', { required: true })} />
        {errors.login && <span>Login is required</span>}
        <FormField label="Password" name="password" id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <span>Password is required</span>}
        <ButtonForm type="submit" isBig>
          Sign in
        </ButtonForm>
      </Form>
    </FormWrapper>
  );
};

export default UnauthenticatedApp;
