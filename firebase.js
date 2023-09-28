
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8BFWhzzmsL-xAr9sK_TmXLdlE4q1qaR0",
    authDomain: "ozmic-web-9ed4b.firebaseapp.com",
    projectId: "ozmic-web-9ed4b",
    storageBucket: "ozmic-web-9ed4b.appspot.com",
    messagingSenderId: "529520113248",
    appId: "1:529520113248:web:4ad46077cb041423c83505",
    measurementId: "G-B91Y2PP4MC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
