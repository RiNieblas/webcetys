// Esto sirve para mostrar en la página los cambios que ha habido dentro de la base de datos, para que se muestre en la página de base de datos. Para investigar más tarde.

var bigOne = document.getElementById("bigone");
var dbRef = firebase.database().ref().child("text");
dbRef.on("value", snap => bigOne.innerText = snap.val());