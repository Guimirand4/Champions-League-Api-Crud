import express, {json, Request, Response} from 'express';

export function createApp(){
    const app = express();
    app.use(json())

    app.get("/", (req: Request, res:Response) =>{
    res.json({id: 1, name: "John Doe", age: 30});

    });
    return app;
};

