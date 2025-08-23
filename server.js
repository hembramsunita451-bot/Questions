const http = require('http')
const url = require('url')
const products = [
    { id: 1, name: "Laptop", price: 67000 },
    { id: 2, name: "Laptop", price: 67000 },
    { id: 3, name: "Laptop", price: 67000 },

];
const newproduct = {id:4,name:"phone",price:78000}
const updatedproduct = {...products,newproduct}

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'application/json'});
    const parsedurl = url.parse(req.url,true);
    const pathname = parsedurl.pathname;
    if(pathname === '/products'){
        res.end(JSON.stringify(products));
    } else if(pathname === '/updateproduct'){
      res.end(JSON.stringify(updatedproduct));
    } else if(pathname === '/product') {
        const id = parseInt(parsedurl.query.id);
        const product = products.find(p=>p.id === id);
        if(product){
            res.end(JSON.stringify(product)); 
        }
        else {
          res.end(JSON.stringify({message:"product not found"}));   
        } 
    }   
     else {
        res.end(JSON.stringify({message:"product not found"}));
    }

});
const port = 5600;
server.listen(port, () => {
    console.log('server is running port 5600');
});