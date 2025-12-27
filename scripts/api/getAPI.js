export async function getAPI (apiConfig) {

	const { manageBench } = await import("./modules/manageBench/manageBench.js");
	const { errorHandle } = await import("../shared/manageError/errorHandle.js");

	// ---------------

	const getBench = await manageBench(apiConfig);

	if (!await errorHandle("status")) { return false; }

	return {
		"bench": getBench
	};

}