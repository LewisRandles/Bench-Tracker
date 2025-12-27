export async function checkGender (itemValue) {

	const { isNully } = await import("../../../shared/condition/isNully.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patterns } = await import("../../../shared/manageRegex.js");

	// ---------------

	if (await isNully(itemValue)) {
		return "No Value";
	}

	else {
		itemValue = String(itemValue);
	}

	if (patterns.pattern4.test(itemValue)) {

		switch (itemValue.toLowerCase()) {

			case "m": {
				return "Male";
			}

			case "f": {
				return "Female";
			}

			default: {
				return "Unknown";
			}
			
		}
	}
    
	else {
		await errorHandle(6481, "checkGender");
		return false;
	}

}