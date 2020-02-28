const express = require('express')
var path = require('path');
const bodyParser = require('body-parser');


const client = require('./DB/Config')

const {selectAllOrders,selectAllItems,deleteOrder,updateOrder,insertOrder} = require('./DB/QueryFunction') 

const app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT | 3000;
client.connect()



 app.listen(port, () => 
     console.log(` app & DB listening on port ${port}!`))


app.get('/',  (req, res)  => {

     res.sendFile(path.join(__dirname+'/public/index.html'));
    
});    


app.get('/orders', function(req, res) {
        
      selectAllOrders().then((result) => {

         res.send(result);
     })  
});
    
app.get('/allitems', function(req, res) {
        
     selectAllItems().then((result) => {

        res.send(result);
    })  
});

app.post('/updateorder', function(req, res) {
    var obji =  req.body.obji ;
    
    updateOrder(obji).then((result) => {

     res.status(200).send('order UPDATE');
 })  
});

app.post('/addorder', function(req, res) {
       var order =  req.body.order
       
     insertOrder(order).then(() => {

        res.status(200).send("Adedd Sucussuss");
    })  
});

app.post('/deleteorder', function(req, res) {
          var id = req.body.id;
                             
    deleteOrder(id).then((result) => {

        res.status(200).send("order DELETE");
    }).catch((err) => {
        res.status(200).send("order  DOSENT DELETE");
    })
});
   



