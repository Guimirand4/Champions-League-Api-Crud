import express, {json, Request, Response} from 'express';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

app.use(json())

app.get("/", (req: Request, res:Response) =>{
    res.json({id: 1, name: "John Doe", age: 30});

});




