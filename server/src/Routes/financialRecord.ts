import express,{Request,Response} from "express";
import { getRecords } from "../Controller/FinancialRecord";


//Setup router
const router = express.Router()

router.post("/post",)
router.get("/getAllByUserId/:userID",getRecords)


export {router as financialRouter}