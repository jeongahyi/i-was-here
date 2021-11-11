import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

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

export async function setTrip(data) {
  console.log(data);
  await setDoc(doc(db, "trips", data.id), {
    id: data.id,
    map_id: data.mapId,
    country_name: data.countryName,
    start_date: data.startDate,
    end_date: data.endDate,
    tags: data.tags,
    image_url: data.imageUrl,
  });
}
export default db;
