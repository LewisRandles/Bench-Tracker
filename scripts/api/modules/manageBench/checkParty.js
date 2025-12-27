export async function checkParty (nameValue, itemValue, nameTable) {

	const { patterns } = await import("../../../shared/manageRegex.js");
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

		// membershipStartDate
		case nameTable.children.item8.name.altName:

		// membershipEndDate
		case nameTable.children.item4.name.altName:

		// statusStartDate
		case nameTable.children.item12.name.altName: {
			const formatTimezone = itemValue.replace(patterns.pattern6, "");
			return await patternTest(formatTimezone, "pattern7", 3230, "checkParty");
		}

		// membershipFrom
		case nameTable.children.item7.name.altName: {
			return await patternTest(itemValue, "pattern12", 5633, "checkParty");
		}

		// membershipEndReason
		case nameTable.children.item5.name.altName:

		// membershipEndReasonNotes
		case nameTable.children.item6.name.altName:

		// statusDescription
		case nameTable.children.item9.name.altName:

		// statusNotes
		case nameTable.children.item11.name.altName: {
			return await patternTest(itemValue, "pattern5", 3809, "checkParty");
		}

		// statusIsActive
		case nameTable.children.item10.name.altName: {
			return await patternTest(itemValue, "pattern4", 5014, "checkParty");
		}

	}

}