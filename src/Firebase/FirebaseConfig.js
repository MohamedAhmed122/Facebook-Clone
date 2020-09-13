
import firebase from "../firebase";

// to give you access to the firestore db
export const db = firebase.firestore();

export const dataFromSnapshot = (snapshot) => {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  
  return {
      ...data, 
      id: snapshot.id,
    };
};

export const getEventFromFirestore = (observer) => {
    // to get the data from the db
    return db.collection("posts").onSnapshot(observer);
};


export const listenToEventFromFirestore = (observer) => {
  // to listen  data from the db
  return db.collection("posts")
};
