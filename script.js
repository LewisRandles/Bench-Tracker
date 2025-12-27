
import benchTracker from "./scripts/benchTracker_unbundled.js";

// ---------------

const apiConfig = {
	"mode": "person",
	"name": "Nigel Farage"
};

const result = await benchTracker(apiConfig);

console.log(result);