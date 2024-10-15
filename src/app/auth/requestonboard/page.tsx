import RequestOnBoarding from '~/app/auth/components/RequestOnBoarding';

import configuration from '~/configuration';
import { withI18n } from '~/i18n/with-i18n';

const SIGN_IN_PATH = configuration.paths.signIn;

export const metadata = {
  title: 'Onboarding',
};

function RequestOnBoard() {
  return (
    <>
      <RequestOnBoarding />
    </>
  );
}

export default withI18n(RequestOnBoard);
