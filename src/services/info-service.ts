import { fstore } from './firebase';

export const fetchAbout = () => {
  return fstore.collection('info').doc('about').get();
}

export const fetchSocial = () => {
  return fstore.collection('info').doc('social').get();
}

