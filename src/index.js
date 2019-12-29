const {isValidData, fraction} = require('./calc');
const {memorySizeOf, printUsed} = require('./size');

const ms = [
	"1.5",
	"3",
	6,
	"1.5",
];

let res = null;

console.clear();

try {
	const [dataOk, dataFail] = isValidData(ms);
	if (!dataOk) {
		throw new Error("main(): data validation not passed, problems:" + dataFail);
	}
	res = fraction(ms);
	console.log("\nDone, result: ", res);
} catch (e) {
	console.log("\x1b[31m%s\x1b[0m", "ERROR:", e.message);
}

console.log("Memory res[obj] = ", memorySizeOf(res));
printUsed(process.memoryUsage());

