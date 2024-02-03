"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const program_1 = require("../controllers/program");
const router = (0, express_1.Router)();
router.get('/', program_1.getPrograms);
router.get('/:id', program_1.getProgram);
router.post('/', program_1.postProgram);
router.put('/:id', program_1.updateProgram);
// router.delete('/:id', deleteProgram)
exports.default = router;
