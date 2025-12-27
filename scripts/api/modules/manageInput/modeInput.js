export async function modeInput (modeValue) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	const characterCheck = await patternTest(modeValue, "pattern4", 4487, "modeInput");

	if (characterCheck) {

		const formatValue = (await spaceFormat(String(characterCheck), "singleSpace")).toLowerCase();

		if (formatValue) {

			if (formatValue === "place" || formatValue === "person") {
				return formatValue;
			}

			else {
				await errorHandle(2721, "modeInput");
				return false;
			}

		}

		else {
			await errorHandle(5632, "modeInput");
			return false;
		}

	}

}