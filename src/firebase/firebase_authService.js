import firebase from "./firebase"
export const createUserAuth = (email, password) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
}
export const singInUserAuth = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
}
