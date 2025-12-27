export async function powerDuration (timeStart, timeEnd) {

	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { timeDifference } = await import("./timeDifference.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patterns } = await import("../../../shared/manageRegex.js");

	// ---------------

	let validStart;

	if (await conditionCheck(timeStart, "string")) {

		if (timeStart.toLowerCase() !== "no value") {
			validStart = new Date(timeStart).getDate() ? timeStart : false;
		}

		else {
			await errorHandle(2118, "powerDuration");
			return false;
		}

	}

	else {
		await errorHandle(5098, "powerDuration");
		return false;
	}

	// ---------------

	let validEnd;

	if (await conditionCheck(timeEnd, "string")) {

		if (timeEnd.toLowerCase() !== "no value") {
			validEnd = new Date(timeEnd).getDate() ? timeEnd : false;
		}

		else if (timeEnd.toLowerCase() === "no value") {
			validEnd = (new Date).toISOString().replace(patterns.pattern11, "");
		}

		else {
			await errorHandle(7552, "powerDuration");
			return false;
		}

	}

	else {
		await errorHandle(5049, "powerDuration");
		return false;
	}

	// ---------------

	if (validStart && validEnd) {

		const getDifference = await timeDifference(validStart, validEnd);

		if (getDifference) {
			return getDifference;
		}

		else {
			await errorHandle(6367, "powerDuration");
			return false;
		}

	}

	else {
		await errorHandle(8531, "powerDuration");
		return false;
	}
	
}