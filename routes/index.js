var express = require('express');
var router = express.Router();
const BookCollection=require('../models/SchemaRule');
require('dotenv').config({path:'./.env'})

/* GET home page. */
router.get('/',  async function(req, res, next) {
  const allBook = await BookCollection.find();
  res.render('index',{allBook});
});
router.get('/explore/:id', async function(req, res, next) {
  const BookId= req.params.id;
  const book = await BookCollection.findById(BookId);
  res.render('explore',{book});
});

router.get("/update/:id", async function(req,res,next){
  const BookId= req.params.id;
  const books = await BookCollection.findById(BookId)
  res.render("update",{books})
});
router.post("/update/:id", async function(req,res,next){
  const BookId= req.params.id;
  const books = await BookCollection.findByIdAndUpdate(BookId,req.body)
  res.redirect(`/explore/${BookId}`)
})
router.get('/delete/:id', async function (req,res,next){
const BookId= req.params.id;
const books = await BookCollection.findByIdAndDelete(BookId,req.body);
res.redirect('/')
})

router.get('/create', function(req, res, next) {
  res.render('create');
});
router.post('/create', async function(req, res, next) {
try{
  const allBook = await BookCollection(req.body);
  await allBook.save();
   res.redirect('/');
} catch (err){
  res.send(err.message)
}
});

module.exports = router;
