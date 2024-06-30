import express from "express";
import { addRecord, deleteRecord, getRecords, updateRecords } from "../Controller/FinancialRecord";


//Setup router
const router = express.Router()

router.post("/post",addRecord)
router.get("/getRecordsByUserId/:userID",getRecords)
router.put("/updateRecordByID/:id",updateRecords)
router.delete("/deleteRecord/:id",deleteRecord)


export {router as financialRouter}