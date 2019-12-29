const {isValidData, fraction} = require('./calc');

const ms = [
	"1.5",
	"3",
	6,
	"1.5",
];

try {
	const [dataOk, dataFail] = isValidData(ms);
	if (!dataOk) {
		throw new Error("main(): data validation not passed, problems:" + dataFail);
	}
	const res = fraction(ms);
	console.log("done: ", res);
} catch (e) {
	console.log("\x1b[31m%s\x1b[0m", "ERROR:", e.message);
}


