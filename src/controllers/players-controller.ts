import express, { Request, Response} from 'express';

export const getPlayer = (req: Request, res:Response) =>{
    res.json({id: 1, name: "John Doe", age: 30});

    }