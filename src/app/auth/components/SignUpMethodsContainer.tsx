'use client';

import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import If from '~/core/ui/If';
import Trans from '~/core/ui/Trans';
import TextField from '~/core/ui/TextField';
import Button from '~/core/ui/Button';
import Heading from "~/core/ui/Heading";

import EmailPasswordSignUpContainer from '~/app/auth/components/EmailPasswordSignUpContainer';
import PhoneNumberSignInContainer from '~/app/auth/components/PhoneNumberSignInContainer';
import EmailLinkAuth from '~/app/auth/components/EmailLinkAuth';
import OAuthProviders from '~/app/auth/components/OAuthProviders';

import configuration from '~/configuration';
import EmailOtpContainer from '~/app/auth/components/EmailOtpContainer';

const providers = configuration.auth.providers;
const SIGN_IN_PATH = configuration.paths.signIn;

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3033/api/v1/auth';

function SignUpMethodsContainer() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:''
  });
  //const [error, setError] = useState<string | null>(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const onSignUp = useCallback(() => {
  //   const requireEmailConfirmation =
  //     configuration.auth.requireEmailConfirmation;

  //   // If the user is required to confirm their email, we show them a message
  //   if (requireEmailConfirmation) {
  //     return;
  //   }

    // Otherwise, we redirect them to the onboarding page
  //   router.replace(configuration.paths.onboarding);
  // }, [router]);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    alert("Hai")
    e.preventDefault();

    // if (formData.password !== formData.confirmPassword) {
    //   console.log("formdata")
    //   console.log(formData.password)
    //   console.log("formdataconfirm")
    //   console.log(formData.confirmPassword)
    //   setError('Passwords do not match');
    //   return false;
    // }
    // setError(null);

    // if (formData.password !== formData.confirmPassword) {
    //   console.error("Password do not match:", formData);
    //   return false;
    // }

    const { ...payload } = formData;
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(formData),
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (!response.ok) {
        console.error("Error Response:", data);
        //setError(data.message || 'Registration failed');
        return;
      }

      if (data.accessToken) {
        localStorage.setItem('token', data.accessToken);
        console.log(localStorage.getItem('token'));
      }

      // If registration is successful, redirect or handle the next step
      router.replace('/milironboarding/requestonboard');
    } catch (err) {
      console.error("An error occurred during registration:", err);
    }
  };

  return (
    <>
      {/* <div
      className={`mx-auto flex w-full max-w-sm flex-col items-center space-y-4 rounded-xl border-transparent bg-white px-2 py-1 dark:bg-transparent md:w-8/12 md:border md:px-8 md:py-6 lg:w-5/12 lg:px-6 lg:shadow-xl dark:lg:border-dark-800 lg:dark:bg-dark-900 dark:lg:shadow-[0_0_1200px_0] lg:dark:shadow-primary-400/20 xl:w-4/12 2xl:w-3/12`}
      > */}
        {/* <div>
          <Heading type={6}>
          <span className={'font-medium'}>Sign Up to your account</span>
          </Heading>
        </div> */}
      <form className={'w-full xl:max-w-lg'} onSubmit={handleClick}>
      <div className={'flex-col space-y-4'}>
        <TextField>
          <TextField.Label htmlFor="username">
              User Name
            <TextField.Input
              required
              id="username"
              type="text"
              name="username"
              onChange={handleChange}
              // placeholder="Enter your first name"
            />
            </TextField.Label>
          </TextField>
{/* 
        <TextField>
          <TextField.Label htmlFor="lastname">
            Last Name
          <TextField.Input
            required
            id="lastname"
            type="text"
            name="lastname"
            onChange={handleChange}
            // placeholder="Enter your last name"
          />
          </TextField.Label>
        </TextField> */}

        <TextField>
          <TextField.Label htmlFor="email">
            Email
          <TextField.Input
            required
            id="email"
            type="text"
            name="email"
            onChange={handleChange}
            // placeholder="Enter your email"
          />
          </TextField.Label>
        </TextField>
        <TextField>
          <TextField.Label htmlFor="password">
          Password
          <TextField.Input
          required
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          // placeholder="Enter your password"
          />
          </TextField.Label>
        </TextField>
        {/* <TextField>
          <TextField.Label htmlFor="confirmPassword">
            Confirm Password
          <TextField.Input
            required
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            // placeholder="Enter your confirm password"
          />
          </TextField.Label>
        </TextField> */}
      <div>
      {/* <Button className='flex w-full flex-1 items-center justify-center'> */}
      <Button block type="submit">
        <span>SIGN UP</span>
      </Button>
      </div>
      <div className={'flex justify-center text-xs'}>
        <p className={'flex space-x-1'}>
        <span>
          <Trans i18nKey={'auth:alreadyHaveAnAccount'} />
        </span>

        <Link
        className={'text-primary-800 hover:underline dark:text-primary'}
        href={SIGN_IN_PATH}
        >
          <Trans i18nKey={'auth:signIn'} />
        </Link>
        </p>
      </div>
      {/* <If condition={providers.oAuth.length}> */}
        {/* <OAuthProviders /> */}

        {/* <If condition={providers.emailPassword}>
          <div>
            <span className={'text-xs text-gray-400'}> */}
              {/* <Trans i18nKey={'auth:orContinueWithEmail'} /> */}
            {/* </span>
          </div>
        </If> */}
      {/* </If> */}

      {/* <If condition={providers.emailPassword}>
        <EmailPasswordSignUpContainer onSignUp={onSignUp} />
      </If> */}

      {/* <If condition={providers.phoneNumber}>
        <PhoneNumberSignInContainer onSuccess={onSignUp} mode={'signUp'} />
      </If>

      <If condition={providers.emailLink}>
        <EmailLinkAuth />
      </If>

      <If condition={providers.emailOtp}>
        <EmailOtpContainer shouldCreateUser={true} />
      </If> */}
      </div>
      </form>
      {/* </div> */}
    </>
  );
}

export default SignUpMethodsContainer;
