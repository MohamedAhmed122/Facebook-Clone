
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
//   // if you have date so it will be timeStamp and we need it to change it to time javaScript
//     for (const prop in data){
//         if ( data.hasOwnProperty(prop)){
//             if(data[prop] instanceof firebase.firestore.Timestamp){
//                 data[prop] =data[prop].toDate();
//             }
//         }
//     }