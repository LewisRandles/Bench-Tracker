
import benchTracker from "./benchTracker_bundled.js";

// ---------------

const apiConfig = {
	"mode": "person",
	"name": "Nigel Farage"
};

const result = await benchTracker(apiConfig);

console.log(result);