'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import TextField from "~/core/ui/TextField";
import Button from "~/core/ui/Button";
import AuthProviderButton from "~/core/ui/AuthProviderButton";
import Logo from "~/core/ui/Logo";
import Heading from "~/core/ui/Heading";
import If from '~/core/ui/If';
import Trans from '~/core/ui/Trans';
import OAuthProviders from '~/app/auth/components/OAuthProviders';

import EmailPasswordSignInContainer from '~/app/auth/components/EmailPasswordSignInContainer';
import PhoneNumberSignInContainer from '~/app/auth/components/PhoneNumberSignInContainer';
import EmailLinkAuth from '~/app/auth/components/EmailLinkAuth';

import configuration from '~/configuration';
import EmailOtpContainer from '~/app/auth/components/EmailOtpContainer';
import Divider from '~/core/ui/Divider';

const providers = configuration.auth.providers;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3033/api/v1/auth';

function RequestOnBoarding() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    organizationName:'',
    workEmail:''
  });
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const onSignIn = useCallback(() => {
  //   router.replace(configuration.paths.appHome);
  // }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const token = localStorage.getItem('token'); 
    try{
      const response = await fetch(`${API_URL}/onboard-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${token}`,
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      console.log("Response",data)

      if(data.code){
        router.push('/milirmessage')
      } else{
       
        alert(`Error: ${data.message || 'Request failed'}`);
      }
      } catch (err) {
      alert('An error occurred. Please try again.');
      }
  };
  return (
    <>
      <img 
        src="/assets/images/milir/milirsingle.png" 
        alt="Milir Single"
        className="mx-auto h-10 w-auto"
      />
      <h2 className='text-lg font-bold'>Request Onboarding</h2>
      <p className='text-sm font-medium p-2'>This is a paragraph explaining the purpose of the request page. Please fill out the form below.</p>
      <Divider/>
      <form className={'w-full xl:max-w-lg'} onSubmit={handleSubmit}>
        <div className={'flex-col space-y-4'}>
          <TextField>
              <TextField.Label htmlFor="firstname" >
                  Firstname
                <TextField.Input
                  required
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="John"
                  onChange={handleChange}
                />
                </TextField.Label>
              </TextField>

              <TextField>
              <TextField.Label htmlFor="lastname" >
                Last Name
              <TextField.Input
                required
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Doe"
                onChange={handleChange}
              />
              </TextField.Label>
            </TextField>

            <TextField>
              <TextField.Label htmlFor="organizationName" >
                Organization Name
              <TextField.Input
                required
                id="organizationName"
                type="text"
                name="organizationName"
                placeholder="Your Organization"
                onChange={handleChange}
              />
              </TextField.Label>
            </TextField>

          <TextField>
            <TextField.Label htmlFor="workEmail" >
              Your Email
              <TextField.Input
                required
                type="email"
                name='workEmail'
                placeholder="name@company.com"
                onChange={handleChange}
              />
            </TextField.Label>
          </TextField>
    
          <div>
            <Button block type="submit">
              Submit Request
            </Button>
          </div>
        </div>
      </form>

    </>
  );
}

export default RequestOnBoarding;
