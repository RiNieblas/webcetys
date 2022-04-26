// Importa las funciones que necesites de las SDKs que necesites
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// TODO: Agrega SDKs para productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Tu configuración de aplicación de Firebase
// Para Firebase JS SDK v7.20.0 y posterior, measurementId es opcional
const firebaseConfig = {
	apiKey: "AIzaSyDhNHAZLNaErGnSXFksaM5iMdepR6T7f-M",
	authDomain: "formulariocetys.firebaseapp.com",
	projectId: "formulariocetys",
	storageBucket: "formulariocetys.appspot.com",
	messagingSenderId: "786278037128",
	appId: "1:786278037128:web:fd592d510172cb054f513d",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

var nombre = document.getElementById("nombre");
var vinculacion = document.getElementById("vinculacion");
var categoria = document.getElementById("categoria");
var campus = document.getElementById("campus");
var actividad = document.getElementById("actividad"); // falta trabajar en esto
var produccion = document.getElementsByName("produccion");
var fecha = document.getElementById("fecha");
var descripcion = document.getElementById("descripcion");
// falta agregar archivos {var archivo = document.getElementById("archivo");}

var submitBtn = document.getElementById("submitBtn");

function insertData() {
	set(ref(db, "Formulario/"+fecha.value), {
		Nombre: nombre.value,
		Vinculación: vinculacion.value,
		Categoría: categoria.value,
		Campus: campus.value,
		Actividad: actividad.value,
		Producción: produccion,
		Fecha: fecha.value,
		Descripción: descripcion.value
	})
	.then(()=> {
		alert("Información subida satisfactoriamente :D");
	})
	.catch((error) => {
		alert("Alerta, hay un error." + error);
	});
}

submitBtn.addEventListener("click", insertData);