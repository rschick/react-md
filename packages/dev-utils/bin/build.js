"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = __importDefault(require("./styles"));
var scripts_1 = __importDefault(require("./scripts"));
var utils_1 = require("./utils");
function build(config) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            utils_1.time(function () { return runBuild(config); }, "build");
            return [2 /*return*/];
        });
    });
}
exports.default = build;
function runBuild(_a) {
    var stylesOnly = _a.stylesOnly, scriptsOnly = _a.scriptsOnly;
    return __awaiter(this, void 0, void 0, function () {
        var exclude;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(!scriptsOnly || stylesOnly)) return [3 /*break*/, 2];
                    return [4 /*yield*/, utils_1.time(styles_1.default, "styles")];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    if (!scriptsOnly && !stylesOnly) {
                        console.log();
                    }
                    if (!(!stylesOnly || scriptsOnly)) return [3 /*break*/, 4];
                    return [4 /*yield*/, utils_1.time(scripts_1.default, "scripts")];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    if (scriptsOnly) {
                        exclude = /\.css/;
                    }
                    else if (stylesOnly) {
                        exclude = /\.js/;
                    }
                    console.log();
                    return [4 /*yield*/, utils_1.printMinifiedSizes(exclude)];
                case 5:
                    _b.sent();
                    console.log();
                    return [2 /*return*/];
            }
        });
    });
}
