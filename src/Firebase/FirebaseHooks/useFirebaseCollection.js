import { dataFromSnapshot } from "../FirebaseConfig";

import { useEffect } from "react";




export const useFirestoreCollection = ({ query, data, deps }) => {
    useEffect(() => {
        const unsubscribe = query().onSnapshot(
        (snapshot) => {
            const docs = snapshot.docs.map((doc) => dataFromSnapshot(doc));
            data(docs);
        },
        (error) => console.log(error)
        );
        return () => {
            unsubscribe();
        };
    }, deps); //eslint-disable-line
};
