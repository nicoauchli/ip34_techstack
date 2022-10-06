"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.bookingRouter = router;
router.get('/api/booking', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("working");
}));
router.post('/api/booking', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    /*    await booking.save(function(err, doc) {
            if (err) return console.error(err);
            console.log("Document inserted succussfully!");
        });*/
}));
