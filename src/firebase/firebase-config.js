import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCM0T14sbreYDs50ExMiG0k7zWjs7Y5zl4',
  authDomain: 'boox-app-b553f.firebaseapp.com',
  projectId: 'boox-app-b553f',
  storageBucket: 'boox-app-b553f.appspot.com',
  messagingSenderId: '805536469310',
  appId: '1:805536469310:web:b10ccf850f5d8c4af99c6f',
  measurementId: 'G-34HBYBB7NQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
