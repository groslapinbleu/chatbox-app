import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyA68b384OcoSyvI1Kvg_YM6aPV4N2sE7kU",
    authDomain: "chatbox-app-1da91.firebaseapp.com",
    databaseURL: "https://chatbox-app-1da91.firebaseio.com",
    projectId: "chatbox-app-1da91",
    storageBucket: "chatbox-app-1da91.appspot.com",
    messagingSenderId: "641031699247",
    appId: "1:641031699247:web:930fb50615142cea7cffda"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebase.database());

export {firebaseApp}

export default base
