import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((names) => {
      console.log(`${names[0].body} ${names[1].firstName} ${names[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
