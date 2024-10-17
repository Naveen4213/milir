'use client';

import { FormEvent, useCallback, useState } from 'react';

import useRequestResetPassword from '~/core/hooks/use-request-reset-password';
import AuthErrorMessage from '~/app/auth/components/AuthErrorMessage';

import If from '~/core/ui/If';
import Alert from '~/core/ui/Alert';
import TextField from '~/core/ui/TextField';
import Button from '~/core/ui/Button';
import Trans from '~/core/ui/Trans';
import configuration from '~/configuration';
import { useTranslation } from 'react-i18next';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3033/api/v1/auth';

function PasswordResetRequestContainer() {
  const { t } = useTranslation('auth');
  // const resetPasswordMutation = useRequestResetPassword();
  // const error = resetPasswordMutation.error;
  // const success = resetPasswordMutation.data;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      alert("Hai")
      event.preventDefault();

      const data = new FormData(event.currentTarget);
      const email = data.get('email') as string;
      // const redirectTo = getReturnUrl();

      try {
        const response = await fetch(`${API_URL}/forgot-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (response.ok && result.code) {
          setSuccess(true);
          setError(null);
        } else {
          setError(result.message || 'An error occurred');
          setSuccess(false);
        }
      } catch (err) {
        setError('An error occurred during the request');
      } finally {
        setLoading(false);
      }
    },
    [],
    //   await resetPasswordMutation.trigger({
    //     email,
    //     redirectTo,
    //   });
    // },
    // [resetPasswordMutation],
  );

  return (
    <>
      <If condition={success}>
        <Alert type={'success'}>
          <Trans i18nKey={'auth:passwordResetSuccessMessage'} />
        </Alert>
      </If>

      {/* <If condition={!resetPasswordMutation.data}> */}
      <If condition={!success}>
        <>
          {/* <form onSubmit={(e) => void onSubmit(e)} className={'w-full'}> */}
          <form onSubmit={onSubmit} className={'w-full'}>
            <div className={'flex-col space-y-4'}>
              {/* <div>
                <p className={'text-sm text-gray-700 dark:text-gray-400'}>
                  <Trans i18nKey={'auth:passwordResetSubheading'} />
                </p>
              </div> */}

              <div>
                <TextField.Label>
                  <Trans i18nKey={'common:emailAddress'} />

                  <TextField.Input
                    name="email"
                    required
                    type="email"
                    placeholder={t('emailPlaceholder')}
                  />
                </TextField.Label>
              </div>

              {error && (
              <Alert type="error">
                {error}
              </Alert>
            )}

              {/* <AuthErrorMessage error={error} /> */}

              {/* <Button
                loading={resetPasswordMutation.isMutating}
                type="submit"
                block
              >
                <Trans i18nKey={'auth:passwordResetLabel'} />
              </Button> */}
              <Button loading={loading} type="submit" block>
              <Trans i18nKey="auth:passwordResetLabel" />
            </Button>
            </div>
          </form>
        </>
      </If>
    </>
  );
}

export default PasswordResetRequestContainer;

/**
 * @description
 * Return the URL where the user will be redirected to after resetting
 * their password
 */
// function getReturnUrl() {
//   const host = window.location.origin;
//   const callback = configuration.paths.authCallback;
//   const callbackUrl = `${host}${callback}`;

//   return callbackUrl + '?next=/password-reset';
// }
