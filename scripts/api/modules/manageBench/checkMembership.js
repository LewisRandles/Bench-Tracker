export async function checkMembership (nameValue, itemValue, nameTable) {

	const { isNully } = await import("../../../shared/condition/isNully.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	if (await isNully(itemValue)) {
		return "No Value";
	}

	else {
		itemValue = String(itemValue);
	}

	switch (nameValue) {

		// Party name
		case nameTable.children.item19.name.altName: {
			return await patternTest(itemValue, "pattern13", 7808, "checkMembership");
		}

		// abbreviation
		case nameTable.children.item13.name.altName:

		// isLordsMainParty
		case nameTable.children.item17.name.altName:

		// isLordsSpiritualParty
		case nameTable.children.item18.name.altName:

		// isIndependentParty
		case nameTable.children.item16.name.altName: {
			return await patternTest(itemValue, "pattern4", 6252, "checkMembership");
		}

		// backgroundColour
		case nameTable.children.item14.name.altName:

		// foregroundColour
		case nameTable.children.item15.name.altName: {
			return await patternTest(itemValue, "pattern10", 4533, "checkMembership");
		}

	}

}