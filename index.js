const express = require('express');
const fs = require('fs');
const sharp = require('sharp')

const ejs = require('ejs')
const {Client} = require('pg')
const sass = require('sass')

const date = new Date()
let app = express()

let client = new Client({
    user:       'victor2',
    password:   'parola123',
    host:       'localhost',
    port:       5432,
    database:   'postgres'
});

client.connect();
client.query("select * from produse");
console.log(client._connected);


app.set("view engine", "ejs")

app.use("/res", express.static(__dirname + "/res"))
app.use("/css", express.static(__dirname + "/css"))
app.use("/js", express.static(__dirname + "/js"))





app.get("/produse", function(req, res){

    console.log(req.query)

    let conditie = ""

    if(req.query.categorie)
        conditie += ` AND categorie like '%${req.query.categorie}%'`
        if(req.query.sub_categorie)
            conditie += ` AND sub_categorie like '%${req.query.sub_categorie}%'`

    if(req.query.pret_min)
        conditie += ` AND pret > ${req.query.pret_min}`
    if(req.query.pret_max)
        conditie += ` AND pret < ${req.query.pret_max}`

    console.log(conditie)

    client.query(`SELECT * FROM produse WHERE 1=1 ${conditie};`, function(err, rez){
        if(!err) {
            res.render("pagini/produse", {produse: rez.rows, base: ""})
        } else {
            console.log("Eroare la conectarea la db")
        }
    });
})

app.get(["/", "/index", "/home"], function (req, res) {
    console.log(req.url)
    console.log(req.ip)

    let buf = fs.readFileSync(__dirname + "/res/json/galerie.json").toString("utf-8")
    let ob_img = JSON.parse(buf)

    for (let imag of ob_img.imagini) {
        let nume_imag = imag.cale_fisier.split(".")[0]

        let dim_mic = 150
        let dim_mediu = 300
        let dim_mare = 500

        imag.mic = `${ob_img.cale_galerie}/mic/${nume_imag}.webp`
        // imag.mediu = `${ob_img.cale_galerie}/mediu/${nume_imag}.webp`
        // imag.mare = `${ob_img.cale_galerie}/mare/${nume_imag}.webp`

        imag.ini = `${ob_img.cale_galerie}/${imag.cale_fisier}`

        // if (!fs.existsSync(imag.mic))
        //     sharp(__dirname + "/" + imag.ini).resize(dim_mic).toFile(__dirname + "/" + imag.mic)
        // if (!fs.existsSync(imag.mediu))
        //     sharp(__dirname + "/" + imag.ini).resize(dim_mediu).toFile(__dirname + "/" + imag.mediu)
        // if (!fs.existsSync(imag.mare))
        //     sharp(__dirname + "/" + imag.ini).resize(dim_mare).toFile(__dirname + "/" + imag.mare)

    }

    res.render("pagini/index", {ip: req.ip, imagini: ob_img.imagini, cale: ob_img.cale_galerie, data: date.getMonth()})
})

app.get('/*.ejs', function (req, res) {
        res.status(403).render("pagini/403")
    }
)

app.get("/*", function (req, res) {
    console.log(req.url)
    res.render("pagini" + req.url, function (err, rezultatRender) {
            if (err) {
                res.render("pagini/404")
            } else {
                res.send(rezultatRender)
            }
        }
    )
})

