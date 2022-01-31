// ./routes/index.js

// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()

// 2. RUTEO
router.get("/", (req, res) => {
	res.send("Hola mundo")
})

router.get("/contacto", (req, res) => {
	res.send("Contacto")
})

router.get("/perrito", (req, res) => {

	res.render("index")

})


// 3. EXPORTACIÓN
module.exports = router