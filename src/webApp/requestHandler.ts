import {Request, Response, NextFunction } from 'express';

let filter = (req:Request, res: Response, next: NextFunction): void => {
    console.log("Add your checks here");
    next();
}

let awesome = (req:Request, res: Response): void => {
    res.send("This is awesome");
}

let pathTest = (req:Request, res: Response): void => {
    let pathParam1 = req.params.param1;
    let pathParam2 = req.params.param2;
    res.send(`This is a test ${pathParam1} ${pathParam2}`) ;
}

let queryTest = (req:Request, res: Response): void => {
    let queryParam = req.query.param1;
    res.send(`This is a query param test ${queryParam}`) ;
}

export {awesome, pathTest, filter, queryTest};