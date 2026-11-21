import { Router } from 'express';

const homerouter = Router();

homerouter.get('/', (req, res) => {
    res.send("API Working");
});


export default homerouter;