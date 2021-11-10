import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const projectName = "iwashere-project";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${projectName}.firebaseapp.com`,
  projectId: `${projectName}`,
};
const tripList = [];

initializeApp(firebaseConfig);
const db = getFirestore();

export async function getList(path) {
  const querySnapshot = await getDocs(collection(db, path));
  querySnapshot.forEach((doc) => {
    tripList.push(doc.data());
  });
  return tripList;
}

export default db;
