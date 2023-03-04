"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGame = exports.getGamesNoTipo = exports.findId = exports.getGames = void 0;
const games_json_1 = __importDefault(require("./games.json"));
// Constante games es un array de tipo <GameEntry>, se debe especificar en el constructor también.
const games = games_json_1.default;
const getGames = () => games;
exports.getGames = getGames;
const findId = (id) => {
    const entry = games.find(d => d.id === id);
    if (entry != null) {
        const { tipo } = entry, restOfGame = __rest(entry, ["tipo"]);
        return restOfGame;
    }
    return undefined;
};
exports.findId = findId;
const getGamesNoTipo = () => {
    return games.map(({ id, nombre, img }) => {
        return {
            id,
            nombre,
            img
        };
    });
};
exports.getGamesNoTipo = getGamesNoTipo;
const addGame = (newGameEntry) => {
    const newGame = Object.assign({ 
        // id: games.length + 1,
        id: Math.max(...games.map(d => d.id)) + 1 }, newGameEntry);
    games.push(newGame);
    return newGame;
};
exports.addGame = addGame;
