//// [tests/cases/conformance/externalModules/importTsBeforeDTs.ts] ////

//// [foo_0.d.ts]
export var x: number = 42;

//// [foo_0.ts]
export var y: number = 42;


//// [foo_1.ts]
import foo = require("./foo_0");
var z1 = foo.x + 10;   // Should error, as .ts preferred over .d.ts
var z2 = foo.y + 10; // Should resolve


//// [foo_0.js]
exports.y = 42;
//// [foo_1.js]
var foo = require("./foo_0");
var z1 = foo.x + 10;
var z2 = foo.y + 10;
