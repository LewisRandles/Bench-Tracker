export async function baseInput (configValue) {

	const { nameInput } = await import("./nameInput.js");
	const { modeInput } = await import("./modeInput.js");
	const { manageBase } = await import("./manageBase.js");

	// ---------------

	const getState = {
		"mode": modeInput,
		"name": nameInput
	};

	return await manageBase(configValue, getState);

}