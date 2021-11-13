import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";

const projectName = "iwashere-project";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${projectName}.firebaseapp.com`,
  projectId: `${projectName}`,
};
const list = [];

initializeApp(firebaseConfig);
const db = getFirestore();

export async function getList(path) {
  const querySnapshot = await getDocs(collection(db, path));
  querySnapshot.forEach((doc) => {
    list.push(doc.data());
  });
  return list;
}

export async function setTrip(data) {
  console.log(data);
  await addDoc(collection(db, "trips"), {
    map_id: data.mapId,
    country_name: data.countryName,
    start_date: data.startDate,
    end_date: data.endDate,
    tags: data.tags,
    title: data.title,
    memo: data.memo,
  });
}
export default db;
