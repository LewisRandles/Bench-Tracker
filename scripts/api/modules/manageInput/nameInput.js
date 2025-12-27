export async function nameInput (nameValue) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	const characterCheck = await patternTest(nameValue, "pattern11", 2940, "nameInput");

	if (characterCheck) {

		const formatValue = (await spaceFormat(String(characterCheck), "singleSpace")).toLowerCase();

		if (formatValue) {
			return formatValue;
		}

		else {
			await errorHandle(6201, "nameInput");
			return false;
		}

	}

	else {
		await errorHandle(2739, "nameInput");
		return false;
	}

}