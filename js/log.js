// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyCL_BM_Ae8LMQyFmKeYQ0ZIH_kreP7JG0s",
	authDomain: "fir-487bf.firebaseapp.com",
	databaseURL: "https://fir-487bf.firebaseio.com",
	projectId: "fir-487bf",
	storageBucket: "fir-487bf.appspot.com",
	messagingSenderId: "222737337682",
	appId: "1:222737337682:web:5eac38dff6b02174a73e8b",
	measurementId: "G-8H7MMJ56RZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const settings = {};
db.settings(settings);

