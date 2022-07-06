import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzGM4tphaUrWduST2fTor27Ru2WHaQxVc",
  authDomain: "final-project-aibonya.firebaseapp.com",
  projectId: "final-project-aibonya",
  storageBucket: "final-project-aibonya.appspot.com",
  messagingSenderId: "72729124387",
  appId: "1:72729124387:web:c999de8284f60916f41b96",
};

export default fire.initializeApp(firebaseConfig);
