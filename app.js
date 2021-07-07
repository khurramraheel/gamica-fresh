
let express = require('express');
let jsonwebtoken = require('jsonwebtoken');

let path = require('path');


let app = express();
app.use(express.json());

var multer = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, './uploads');
    },
    filename: function (req, file, next) {
        next(null, file.originalname);
    }
})

var upload = multer({ storage: storage })

let users = [];

let ads = [
    {
        id: 1,
        imgsrc: "https://images.olx.com.pk/thumbnails/160485212-240x180.webp",
        title: "Samsung Mobile",
        price: 20000
    },
    {
        id: 2,
        imgsrc: "https://www.digitalauthority.me/wp-content/uploads/2019/04/shutterstock_572886535.jpg",
        title: "App Development",
        price: 20000
    },
    {
        id: 3,
        imgsrc: "https://digitaldreamsng.com/asset/picture/banners/software-development.jpg",
        title: "Software Development",
        price: 20000
    },
    {
        id: 4,
        imgsrc: "https://neilpatel.com/wp-content/uploads/2021/04/what-is-digital-marketing.png",
        title: "Digital Marketing",
        price: 20000
    },
    {
        id: 5,
        imgsrc: "https://cdn.mos.cms.futurecdn.net/5NyzBxijspGUiFyCiz9F4-1200-80.jpg",
        title: "Android",
        price: 20000
    },
    {
        id: 6,
        imgsrc: "https://cdn.corporatefinanceinstitute.com/assets/marketing-1024x594.jpeg",
        title: "Marketing",
        price: 20000
    }
]

// app.use((req, res, next) => {

//     req.city = "FSD";
//     next();
// });

// /
app.use((req, res, next) => {

    req.country = "PAk";
    next();
})

// app.get('/test', (req, res, next) => {

//     next();

// }, (req, res) => {
//     res.end("20");
// })

app.put('/update_ad'
    , (req, res) => {

        let milgyaAd = ads.find((ad) => {

            if (ad.id == req.body.id) {
                return true;
            }

        })
        if (req.file) {
            milgyaAd.imgsrc = req.file.originalname;
        }

        let cINdex = ads.indexOf(milgyaAd);
        ads[cINdex] = { ...milgyaAd, ...req.body };


        res.json(ads[cINdex]);

    });

app.get('/load_ad', (req, res) => {

    let milgyaAd = ads.find((ad) => {

        if (ad.id == req.query.id) {
            return true;
        }

    })

    res.json(milgyaAd);

});

app.delete('/delete_ad', (req, res) => {

    console.log(req.query.ad_id)

    // await ads.findByIdandRemove(req.query.ad_id)

    let milgyaAd = ads.find((ad) => {

        if (ad.id == req.query.ad_id) {
            return true;
        }

    })

    let myIndex = ads.indexOf(milgyaAd);
    ads.splice(myIndex, 1);


    res.json(ads);

})
app.get('/get_ads', (req, res) => {

    res.json(ads);

})


app.post('/login', async (req, res) => {

    let userMIlgya = users.find((user) => {


        if (user.password == req.body.password && user.email == req.body.email) {
            return true;
        }


    })
    if (userMIlgya) {

        jsonwebtoken.sign({
            id: userMIlgya.id
        }, "al;sdk;las eqwpdk", {
                expiresIn: '2h'
            }, (errr, token) => {

                res.json({
                    token: token,
                    user: userMIlgya
                });

            });





    } else {
        res.status(404);
    }



})


app.get('/check_session', async (req, res) => {

    try {
        let userResponse = await jsonwebtoken.verify(req.query.token, "al;sdk;las eqwpdk")
      
        let userMIlgya = users.find((user) => {


            if (user.id == userResponse.id) {
                return true;
            }
    
    
        })

        res.json(userMIlgya);


    } catch (e) {
       
        res.status(404).json(e);

    }

});

app.post('/signup', async (req, res) => {

    users.push({ ...req.body, id: Date.now() });

    res.json({
        success: true
    })



})




app.post('/create_ad',  upload.single('ad_thumb'), (req, res) => {

    let ad = { ...req.body, imgsrc:req.file.originalname };

    ads.push(ad)
    res.json(ad);

})

// app.post('/create_ad',  upload.single('ad_thumb'), (req, res)=>{

//     let ad = {...req.body, imgsrc:req.file.originalname};

//     ads.push(ad)
//     res.json(ad);

// })

app.use(express.static('./uploads'));
app.use(express.static('./build'));



app.use('*',  (req, res)=> {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
   });

app.listen(process.env.PORT || 6060, () => {


    console.log('server is chaling, wah')
})