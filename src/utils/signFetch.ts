import { SIGN_IN_URL } from '../constants/urls';

export default async function signInFetch(data: any) {
  const response = fetch(SIGN_IN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
}
