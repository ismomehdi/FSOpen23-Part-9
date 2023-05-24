"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json());
const PORT = 3001;
app.use((0, cors_1.default)());
app.get('/api/ping', (_req, res) => {
    res.send('pong!');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
