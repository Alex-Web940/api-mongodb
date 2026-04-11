import express from "express"
const app = express()

app.use(express.json())

let notas = []
let id = 1

// CREAR
app.post("/notas", (req, res) => {
    const { titulo, descripcion, estado } = req.body

    const nuevanota = {
        id: id++,
        titulo,
        descripcion,
        estado
    }

    notas.push(nuevanota)
    res.json({ msg: "nota creada", nota: nuevanota })
})

app.get('/notas', (req, res) => {
    res.json(notas)
})

// FILTROS
app.get('/notas/completada', (req, res) => {
    const resultado = notas.filter(n => n.estado === "completada")
    res.json(resultado)
})

app.get('/notas/pendiente', (req, res) => {
    const resultado = notas.filter(n => n.estado === "pendiente")
    res.json(resultado)
})

app.get('/notas/curso', (req, res) => {
    const resultado = notas.filter(n => n.estado === "en curso")
    res.json(resultado)
})

app.put("/notas/:id", (req, res) => {
    const { id } = req.params
    const { titulo, descripcion, estado } = req.body

    const nota = notas.find(n => n.id == id)

    nota.titulo = titulo || nota.titulo
    nota.descripcion = descripcion || nota.descripcion
    nota.estado = estado || nota.estado

    res.json({ msg: "actualizado", nota })
})


app.put('/notas/:id/estado', (req, res) => {
    const { id } = req.params
    const { estado } = req.body

    const nota = notas.find(n => n.id == id)

    nota.estado = estado

    res.json({ msg: "estado actualizado", nota })
})
 app.delete("/notas/:id",(req,res)=>{
    const nota = notas.find(n => n.id != id)

    res.json({msg: "nota eliminada"})
 })
 
app.listen(4000, () => {
    console.log("Servidor corriendo en http://localhost:4000")
})