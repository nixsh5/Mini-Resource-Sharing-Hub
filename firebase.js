// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmzWJmp3MSENgX_wZLNm34RftilRjeVRo",
    authDomain: "resource-sharing-hub.firebaseapp.com",
    projectId: "resource-sharing-hub",
    storageBucket: "resource-sharing-hub.firebasestorage.app",
    messagingSenderId: "500349654322",
    appId: "1:500349654322:web:09f6154c08930beb18732b",
    measurementId: "G-ZBTH0SN9DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In Function
const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User signed in:", result.user);
            window.location.href = "profile.html"; // Redirect after login
        })
        .catch((error) => console.error("Error:", error));
};

// Logout Function
const logOut = () => {
    signOut(auth).then(() => {
        console.log("User logged out");
        window.location.href = "index.html"; // Redirect to home after logout
    });
};

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user);
    } else {
        console.log("No user signed in.");
    }
});

export { auth, signInWithGoogle, logOut };
