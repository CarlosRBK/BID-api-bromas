const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jokesDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Se establecio la conexion con mongoose exitosamente"))
	.catch(err => console.log("Algo ocurrio con la conexion a mongodb", err));
