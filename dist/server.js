"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app = http_1.default.createServer((req, res) => {
    res.write('Servidor funcionando!');
    res.end();
});
if (require.main === module) {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}
exports.default = app;
