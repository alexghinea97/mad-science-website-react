import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/datastore';

const config = {
  apiKey: 'AIzaSyBVrEgTTV0AU8n0yMzbmeC7qRNEybemEMw',
  authDomain: 'mad-science-website.firebaseapp.com',
  databaseURL: 'https://mad-science-website.firebaseio.com',
  projectId: 'mad-science-website',
  storageBucket: 'mad-science-website.appspot.com',
  messagingSenderId: '244100871297'
};

export default firebase.initializeApp(config);
