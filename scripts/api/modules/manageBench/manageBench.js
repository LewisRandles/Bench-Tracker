export async function manageBench (bench) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { getBench } = await import("./getBench.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getBenchValue = await getBench(bench);

	if (getBenchValue) {
		return getBenchValue;
	}

	else {
		await errorHandle(4296, "manageBench");
		return false;
	}

}