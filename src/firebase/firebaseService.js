import firebase from "./firebase"
export const addDataToFB = (collectionName, data) => {
    return firebase
        .firestore()
        .collection(collectionName)
        .add(data);
}
export const readDataFromFB=(collectionName)=>{
    return firebase
      .firestore()
      .collection(collectionName);      
}


