const fraction = (ms = [], maxTime = 1) => {
	if (!Array.isArray(ms)) {
		throw new Error("fraction(): 1st argument should be an array");
	}
	if (!ms.length) return [];

	const startTime = Date.now();

	let tmp = [];
	let sum = 0;
	for(let i = 0, len = ms.length; i < len; i++) {
		checkTime(startTime, maxTime);
		const d = toDigit(ms[i]);
		tmp.push(d);
		sum += d;
	}
	const one = sum / 100;
	return tmp.map((item) => {
		checkTime(startTime, maxTime);
		return (item / one).toFixed(3);
	});
};

const isValidData = (ms = []) => {
	if (!Array.isArray(ms)) {
		throw new Error("isValidData(): 1st argument should be an array");
	}
	const res = [];

	ms.forEach((item, index) => {
		if (chekVal(item) === false) {
			res.push(`\nindex: ${index}, value: ${item}`);
		}
	});

	return [!res.length, res];
};

function checkTime(start, max) {
	const diff = Date.now() - start;
	if (diff > max) {
		throw Error("checkTime(): it takes to long...");
	}
}

function toDigit(item) {
	if (typeof item === "string") {
		return +item.replace(/[^0-9.]/g, "");
	}
	if (typeof item === "number") {
		return item
	}
	throw new Error("toDigit(): item is not a number");
}

function chekVal(item) {
	if (typeof item === "string") {
		const val = /^\d+\.?\d*$/.test(item);
		if (val) {
			return true;
		}
	}
	if (typeof item === "number") {
		return true
	}

	return false;
}

module.exports = {
	fraction,
	isValidData,
};
