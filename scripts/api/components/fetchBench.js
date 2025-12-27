export async function fetchBench (fetchConfig) {

	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { attemptFetch } = await import("../modules/attemptFetch.js");

	// ---------------

	if (await conditionCheck(fetchConfig, "object")) {

		let fetchURL;

		switch (fetchConfig.mode) {

			case "person": {
				fetchURL = encodeURI(`https://members-api.parliament.uk/api/Members/Search?Name=${fetchConfig.name}&skip=0&take=1`);
				break;
			}

			case "place": {
				fetchURL = encodeURI(`https://members-api.parliament.uk/api/Location/Constituency/Search?searchText=${fetchConfig.name}&skip=0&take=1`);
				break;
			}

		}

		const returnResult = await attemptFetch(fetchURL);

		if (await conditionCheck(returnResult, "object")) {
			return returnResult;
		}

		else {
			await errorHandle(6115, "fetchBench");
			return false;
		}

	}

	else {
		await errorHandle(6623, "fetchBench");
		return false;
	}

}