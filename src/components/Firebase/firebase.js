import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAk6bifdNspHpJiayRf1WVw0mNBN_7lf2g",
    authDomain: "wp-database-d7c6f.firebaseapp.com",
    databaseURL: "https://wp-database-d7c6f.firebaseio.com",
    projectId: "wp-database-d7c6f",
    storageBucket: "wp-database-d7c6f.appspot.com",
    messagingSenderId: "76433547092",
    appId: "1:76433547092:web:36a2db486b682d53f632c1",
    measurementId: "G-GY12PRF563"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
    doSignOut = () => this.auth.signOut();
  }
  export default Firebase;