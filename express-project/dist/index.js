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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true }));
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, secret, email, fullname } = req.body;
    // Store a user-copy on Chat Engine!
    try {
        const r = yield axios_1.default.post("https://api.chatengine.io/users/", { username, secret, email, fullname }, { headers: { "Private-Key": "2ce7cf14-1478-4d83-b1a0-c13c9c9b276d" } });
        return res.status(r.status).json(r.data);
    }
    catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, secret } = req.body;
    // Fetch this user from Chat Engine in this project!
    try {
        const r = yield axios_1.default.get("https://api.chatengine.io/users/me/", {
            headers: {
                "Project-ID": "4dd2c849-bcb1-4f22-b3fc-796bec5d4d19",
                "User-Name": username,
                "User-Secret": secret,
            },
        });
        return res.status(r.status).json(r.data);
    }
    catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
}));
const port = 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map