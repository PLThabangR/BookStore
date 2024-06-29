import express,{Request,Response} from "express";
import { addRecord, getRecords } from "../Controller/FinancialRecord";


//Setup router
const router = express.Router()

router.post("/post",addRecord)
router.get("/getRecordsByUserId/:userID",getRecords)
router.put("/update")


export {router as financialRouter}