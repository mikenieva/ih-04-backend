// ./index.js

/**
 * PATRONES DE DISEÑO
 * SON PROPUESTAS Y CASOS DE USO QUE PERMITEN RESOLVER PROBLEMAS COTIDIANOS
 * 
 * 1. MODULE PATTERN - PATRÓN MODULAR
 * 
 * APLICA VALIDEZ DE IMPORTACIONES Y EXPORTACIONES EN UN PROYECTO
 * 
 */


// 1. IMPORTACIONES
// PROCESO DE TRAERNOS FUNCIONES O VARIABLES DE OTROS ARCHIVOS JS A ESTE

// A. ARCHIVOS EXTERNOS PROPIOS 
// const sumita = require("./suma")

// B. ARCHIVOS DE NODE_MODULES

// EXPRESS ES UNA LIBRERÍA QUE FUNCIONA PARA LA GESTIÓN DE RUTEOS Y MIDDLEWARES
const express 		= require("express")
const app			= express()


// 2. MIDDLEWARES
// ACTIVAR VARIABLES DE ENTORNO
// EN LOCAL VALE UNA COSA, EN REMOTO VALE OTRA
require("dotenv").config()

// ACTIVA LA CARPETA PÚBLICA DEL PROYECTO
app.use(express.static("public"))

// ESTABLECER VISTAS
// LOCAL: 	__dirname vale http://localhost:PORT
// REMOTO: 	__dirname vale https://mikenieva-ih-04-backend.herokuapp.com
// DECIR DÓNDE ESTÁ LA CARPETA DE VISTAS
app.set("views", __dirname + "/views")

// INDICAR QUÉ MOTOR DE TEMPLATE VAMOS A USAR
// HANDLEBARS - ES UN MOTOR QUE PERMITE MANEJAR LÓGICA DENTRO DE ARCHIVOS HTML
app.set("view engine", "hbs")

// 3. RUTAS
app.use("/", require("./routes/index"))


// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log("Servidor activo")
})
