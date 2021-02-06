// on initialise un router sous router pour le système d'inscription
const router = require("express").Router();

const bodyParser = require("body-parser");

// création du parser des données de formulaire
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const csurf = require("csurf");

const Controler_inscription = require("../controler/controler_inscription.js");

const controler_inscription = new Controler_inscription();

const ent = require("ent");

var csrfProtection = csurf({ cookie: true });

// routage de traitement de la page d'inscription
router.get("/", csrfProtection, async (req, res)=>{

    try {
        res.render("inscription.html", {
            title: "Créer un compte TCHAT-CHEUR",
            description: "",
            csrfToken: req.csrfToken()
    
        });
    } catch(e) {

        console.log(e);
        res.send("Internal Server");
    }
    

});


// routage de traitement du formulaire d'inscription
router.post("/",urlencodedParser , async (req, res)=> {
    try {

        let {username , pseudo , email , password_1 , password_2}  = req.body;


        // on valide les informations récu de l'utilisateur
        let {error , value} = await controler_inscription.validate_data({username , pseudo , email , password_1 , password_2});

        // dans le cas ou toutes les données sont correcte
        
        if(value && !error) {

            res.redirect("/inscription/validation");

        } else {

            res.send({error , value});
        }
    } catch(e) {

        console.log(e);
        res.send("Internal Server");
    }
    
});


// routage de rendu de la page de validation de création de compte
router.get("/validation", csrfProtection, async (req, res)=>{

    try {

        res.render("validation_inscription.html", {
            title: "Valider votre compte tcha-tcheur",
            description: "",
            csrfToken: req.csrfToken()
        });

    } catch(e) {

        console.log(e);
        res.send("Internal Server");
    }
});

// routage de traitement de la validation du compte utilisateur
router.post("/validation", async (req, res)=>{
    try {


        res.send("validation compte utilisateur");
        
    } catch(e) {
        console.log(e);
        res.send("Internal Server");
    }
});

module.exports = router;


