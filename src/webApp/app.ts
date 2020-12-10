import express = require("express");
import {filter, awesome, pathTest, queryTest} from './requestHandler';

const app = express();
app.set("port", 8080);

app.use(filter);

app.get('/query', queryTest);
app.get('/test/:param1/product/:param2', pathTest); 
app.post('/', awesome);

app.listen(app.get("port"), () => {
    console.log('App is running on localhost port %d in %s mode', app.get("port"), app.get("env"));    
})