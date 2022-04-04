// Importa las funciones que necesites de las SDKs que necesites
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// TODO: Agrega SDKs para productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Tu configuración de aplicación de Firebase
// Para Firebase JS SDK v7.20.0 y posterior, measurementId es opcional
const firebaseConfig = {
	apiKey: "AIzaSyDhNHAZLNaErGnSXFksaM5iMdepR6T7f-M",
	authDomain: "formulariocetys.firebaseapp.com",
	databaseURL: "https://formulariocetys-default-rtdb.firebaseio.com/",
  	projectId: "formulariocetys",
	storageBucket: "formulariocetys.appspot.com",
  	messagingSenderId: "786278037128",
  	appId: "1:786278037128:web:fd592d510172cb054f513d",
  	measurementId: "G-2L5T3V24WK"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const postListRef = ref(db, "posts");
const newPostRef = push(postListRef);

// * funciones para coleccionar datos
// ! Esta es la línea que me está fallando, en la consola se muestra como: "Uncaught ReferenceError: firebase is not defined"

var messagesRef = firebase.database().ref("messages");

// * funciones de submisión a base de datos

document.getElementById("webForm").addEventListener("submit", submitForm);

function submitForm(event) {
	event.preventDefault();

	var nombre = document.getElementById("nombre").value;
	var vinculacion = document.getElementById("vinculacion").value;
	var categoria = document.getElementById("categoria").value;
	var campus = document.getElementById("campus").value;
	var actividad = document.getElementById("actividad").value;
	var fecha = document.getElementById("fecha").value;
	var descripcion = document.getElementById("descripcion").value;

	saveMessage(nombre, vinculacion, categoria, actividad, campus, fecha, descripcion);
}

// Save messages to firebase

function saveMessage(nombre, vinculacion, categoria, campus, actividad, fecha, descripcion) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		nombre : nombre,
		vinculacion : vinculacion,
		categoria : categoria,
		campus : campus,
		actividad : actividad,
		Fecfechaha : fecha,
		descripcion : descripcion
	});
}