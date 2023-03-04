"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseNombre = (nombreFromRequest) => {
    if (!isString(nombreFromRequest)) {
        throw new Error('Nombre incorrecto o nulo');
    }
    return nombreFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const parseFoto = (args) => {
    if (!isURL(args)) {
        throw new Error('La URL que has pasado no contiene ninguna imagen!');
    }
    return args;
};
const isURL = (url) => {
    return Boolean(url.match(/^http[^\\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
};
const parseTipo = (usrTipo) => {
    if (!isString(usrTipo) || !isTipo(usrTipo)) {
        throw new Error('No has introducido un tipo válido!');
    }
    return usrTipo;
};
const isTipo = (args) => {
    return Boolean(Object.values(types_1.Tipo).includes(args));
};
const toNewGameEntry = (object) => {
    const newEntry = {
        nombre: parseNombre(object.nombre),
        tipo: parseTipo(object.tipo),
        img: parseFoto(object.img)
    };
    return newEntry;
};
exports.default = toNewGameEntry;
