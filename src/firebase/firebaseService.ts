import firebase from "./firebase"
export const addDataToFB = (collectionName:any, data:any) => {
    return firebase
        .firestore()
        .collection(collectionName)
        .add(data);
}
export const readDataFromFB = (collectionName:any) => {
    return firebase
        .firestore()
        .collection(collectionName);
}


