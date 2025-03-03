// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmzWJmp3MSENgX_wZLNm34RftilRjeVRo",
    authDomain: "resource-sharing-hub.firebaseapp.com",
    projectId: "resource-sharing-hub",
    storageBucket: "resource-sharing-hub.appspot.com", // Fixed incorrect URL
    messagingSenderId: "500349654322",
    appId: "1:500349654322:web:09f6154c08930beb18732b",
    measurementId: "G-ZBTH0SN9DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// 🔹 Function to Log in with Email & Password
const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Logged in:", userCredential.user);
            window.location.href = "dashboard.html"; // Redirect
        })
        .catch((error) => {
            console.error("Login Error:", error.message);
            throw error;
        });
};

// 🔹 Function to Register with Email & Password
const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Registered:", userCredential.user);
        })
        .catch((error) => {
            console.error("Registration Error:", error.message);
            throw error;
        });
};

// 🔹 Function to Log Out
const logOut = () => {
    signOut(auth)
        .then(() => {
            console.log("User logged out");
            window.location.href = "index.html"; // Redirect after logout
        })
        .catch((error) => console.error("Logout Error:", error.message));
};

// Export functions
export { auth, loginWithEmail, registerWithEmail, logOut };
