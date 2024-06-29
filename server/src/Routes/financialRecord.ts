import express from "express";
import { addRecord, getRecords, updateRecords } from "../Controller/FinancialRecord";


//Setup router
const router = express.Router()

router.post("/post",addRecord)
router.get("/getRecordsByUserId/:userID",getRecords)
router.put("/updateRecordByID/:id",updateRecords)


export {router as financialRouter}