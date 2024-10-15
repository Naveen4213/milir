'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import configuration from '~/configuration';
import { TextField } from '~/core/ui/TextField';
import Button from '~/core/ui/Button';
import Link from 'next/link';

const providers = configuration.auth.providers;

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3033/api/v1/auth';

function SignInMethodsContainer() {
  const router = useRouter();

const [formData, setFormData] = useState({
    email: "",
    password: "",
})

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
  const {  ...payload } = formData;
  try {
    const response = await fetch(`${API_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (data.code) {
      //to set the token in localStorage. 
      if (data.accessToken) {
        localStorage.setItem('token', data.accessToken);  
        console.log(localStorage.getItem('token'));        
      }
      router.push('/milirdashboard');
    }else{
      // need to work this part
      console.log("Error msg")
    }
  } catch (err) {
    console.error('An error occurred during sign-in');
  }
};

  // const onSignIn = useCallback(() => {
  //   router.replace(configuration.paths.appHome);
  // }, [router]);

  return (
    <>
<form className={'w-full xl:max-w-lg'} onSubmit={handleSubmit}>
<div className={'flex-col space-y-4'}>
<TextField>
          <TextField.Label htmlFor="email" className="mt-4">
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
          <TextField.Label htmlFor="password" className="mt-4">
          Password
          <TextField.Input
          required
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          // placeholder="Enter your password"
          />
            <div className={'py-0.5 text-xs'}>
              <Link href={'/auth/password-reset'} className={'hover:underline'}>
                {/* <Trans i18nKey={'auth:passwordForgottenQuestion'} /> */}
                Forgot password?
              </Link>
            </div>
          </TextField.Label>
        </TextField>
        <div>
      <Button className='flex w-full flex-1 items-center justify-center'>
        <span>SIGN IN</span>
      </Button>
      </div>
      {/* <If condition={providers.oAuth.length}> */}
        {/* <OAuthProviders /> */}

        {/* <If condition={providers.emailPassword}> */}
          {/* <div> */}
            {/* <span className={'text-xs text-gray-400'}>
              <Trans i18nKey={'auth:orContinueWithEmail'} />
            </span> */}
          {/* </div> */}
        {/* </If> */}
      {/* </If> */}

       {/* <If condition={providers.emailPassword}>
        <EmailPasswordSignInContainer onSignIn={onSignIn} />
      </If>

      <If condition={providers.phoneNumber}>
        <PhoneNumberSignInContainer onSuccess={onSignIn} mode={'signIn'} />
      </If>

      <If condition={providers.emailLink}>
        <EmailLinkAuth />
      </If>

      <If condition={providers.emailOtp}>
        <EmailOtpContainer shouldCreateUser={false} />
      </If>  */}
      </div>
      </form>
    </>
  );
}

export default SignInMethodsContainer;
