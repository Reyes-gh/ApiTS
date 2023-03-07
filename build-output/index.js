"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware que transforma la req.body a un json
const PORT = 3000;
app.use(routes_1.default); // Pasamos por parámetro de uso a la app los enlaces '/' para las acciones de la API
app.listen(PORT, () => {
    console.log(`Servidor abierto en puerto ${PORT}`);
});
