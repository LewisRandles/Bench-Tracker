export async function getBench (bench) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { sendProcess } = await import("../sendProcess.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { objectLoop } = await import("../manageProcess/objectLoop.js");
	const { fetchBench } = await import("../../components/fetchBench.js");
	const { benchNames } = await import("./benchNames.js");
	const { powerDuration } = await import("../manageDate/powerDuration.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getModeValue = await fetchBench(bench);

	if (getModeValue) {

		let returnValue;

		if (bench.mode === "place") {
			const baseValue = getModeValue.items[0].value;
			const getCurrent = baseValue.currentRepresentation;
			returnValue = getCurrent.member.value;
		}

		else if (bench.mode === "person") {
			returnValue = getModeValue.items[0].value;
		}

		if (await conditionCheck(returnValue, "object")) {

			const getAmount = await objectLoop(returnValue);

			const itemStorage = {

				"bench": {
					"type": "object",
					"value": returnValue
				},

				"amount": {
					"type": "number",
					"value": getAmount
				},

				"name": {
					"type": "object",
					"value": benchNames
				}

			};

			const getProcess = await sendProcess(itemStorage);

			if (getProcess) {

				const getDuration = await powerDuration(getProcess.membership.startDate, getProcess.membership.endDate);

				if (getDuration) {
					getProcess["membership"]["duration"] = getDuration;
				}

				else {
					await errorHandle(7166, "getBench");
					return false;
				}

				return getProcess;

			}

			else {
				await errorHandle(5341, "getBench");
				return false;
			}

		}

		else {
			await errorHandle(4238, "getBench");
			return false;
		}

	}

	else {
		await errorHandle(3454, "getBench");
		return false;
	}

}