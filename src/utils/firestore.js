import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const projectName = "iwashere-project";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${projectName}.firebaseapp.com`,
  projectId: `${projectName}`,
};
initializeApp(firebaseConfig);
const db = getFirestore();

export async function getData(path) {
  const querySnapshot = await getDocs(collection(db, path));
  querySnapshot.forEach((doc) => {
    console.info(doc.data());
  });
}
