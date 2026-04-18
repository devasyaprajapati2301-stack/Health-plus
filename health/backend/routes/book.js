import express from "express";

import { createAppointment } from "../controller/paitent.js";

const router =express.Router();

router.post('/book',createAppointment);

export default router;