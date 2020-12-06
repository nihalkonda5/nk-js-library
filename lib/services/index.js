"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealtimeDatabaseService = exports.MemoryDatabaseService = void 0;
var memory_database_service_1 = require("./memory.database.service");
Object.defineProperty(exports, "MemoryDatabaseService", { enumerable: true, get: function () { return memory_database_service_1.default; } });
var realtime_database_service_1 = require("./realtime.database.service");
Object.defineProperty(exports, "RealtimeDatabaseService", { enumerable: true, get: function () { return realtime_database_service_1.default; } });
