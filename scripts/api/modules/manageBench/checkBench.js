export async function checkBench (nameValue, itemValue, nameTable) {

	const { isNully } = await import("../../../shared/condition/isNully.js");
	const { patternTest } = await import("../../../shared/patternTest.js");
	const { checkGender } = await import("./checkGender.js");

	// ---------------

	if (await isNully(itemValue)) {
		return "No Value";
	}

	else {
		itemValue = String(itemValue);
	}

	switch (nameValue) {

		// nameDisplayAs
		case nameTable.children.item2.name.altName: {
			return await patternTest(itemValue, "pattern11", 5358, "checkBench");
		}

		// gender
		case nameTable.children.item1.name.altName: {
			return await checkGender(itemValue);
		}
		
		// thumbnailUrl
		case nameTable.children.item3.name.altName: {
			return await patternTest(itemValue, "pattern9", 8242, "checkBench");
		}

	}

}