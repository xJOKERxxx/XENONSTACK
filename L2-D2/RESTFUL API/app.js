const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



var uri = "mongodb://localhost:27017/wikiDB";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;



const animeSchema = {
    title: String,
    content: String
};



const Anime = mongoose.model("Anime", animeSchema);


//////////////////////////////////////////////////////
//App Route function used for chaining methods...
app.route("/animes")

//GET REQUEST : to read data...
//Fetching Data from our created Database..
.get(function(req, res) {
    Anime.find(function(err, foundAnimes) {
        if (!err) {
            res.send(foundAnimes);

        } else {
            res.send(err);
        }

    });
})

//POST REQUEST : to create something...
.post(function(req, res) {
    const newAnime = new Anime({
        title: req.body.title,
        content: req.body.content
    });
    newAnime.save(function(err) {
        if (!err) {
            console.log("Succesfully Added");
        } else {
            console.log(err);
        }
    });
})


//Delete All Data...
.delete(function(req, res) {
    Anime.deleteMany(function(err) {
        if (!err) {
            res.send("Succesfully Deleted");
        } else {
            res.send(err);
        }
    });

});

/////////////////////////////////////////////



//To manipulate specific items ...

app.route("/animes/:animeTitle")



.get(function(req, res) {
    Anime.findOne({ title: req.params.animeTitle }, function(err, foundAnime) {
        if (foundAnime) {
            res.send(foundAnime);
        } else {
            res.send("Error No articles found");
        }
    });
})



//Put Method : updating your entire database entry by replacing with new one......
.put(function(req, res) {
    Anime.update({ title: req.params.animeTitle }, { title: req.body.title, content: req.body.content }, { overwrite: true },
        function(err) {
            if (!err) {
                res.send("Succesfully Updated");
            }
        }
    );

})


//Patch Method: update a particular data in your database without replacing....
.patch(function(req, res) {
    Anime.update({ title: req.params.animeTitle }, { $set: req.body },
        function(err) {
            if (!err) {
                res.send("Succesfully Updated");

            } else {
                res.send(err)
            }
        }
    );

})


//Delete Particular Data...
.delete(function(req, res) {
    Anime.deleteOne({ title: req.params.animeTitle },
        function(err) {
            if (!err) {
                res.send("Succesfully Deleted");
            } else {
                res.send(err);
            }
        }

    );

});


app.listen(3000, function(req, res) {
    console.log("Succesfully Connected on port 3000");
});