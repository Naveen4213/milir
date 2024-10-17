import Link from 'next/link';

import configuration from '~/configuration';
import Heading from '~/core/ui/Heading';
import Trans from '~/core/ui/Trans';

import PasswordConfirmRequestContainer from '~/app/auth/components/PasswordConfirmRequestContainer';
import { withI18n } from '~/i18n/with-i18n';

export const metadata = {
  title: 'Password Reset Request',
};

function PasswordConfirmPage() {
  return (
    <>
        <PasswordConfirmRequestContainer />

    </>
  );
}

export default withI18n(PasswordConfirmPage);
