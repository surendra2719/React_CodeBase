import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth";
import { firebaseConfig } from "../config/firebase.config";
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//enable if anlytics added in firebase console
//firebase.analytics()
export const auth = firebase.auth()
export default firebase