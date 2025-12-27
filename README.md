<div align="center"> <img width="300px" src="https://github.com/LewisRandles/Bench-Tracker/blob/42d94ca5d222e8ec02a971dd91fb456cff309c20/BENCH%20TRACKER.png"> </div>

<h1 align="center">Bench Tracker API Repacker</h1>

<p align="center">Retrieve, organize, and analyze detailed parliamentary member data.</p>

<div align="center"> <img src="https://img.shields.io/badge/Release-V1.0-2EA44F?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/maintained-yes-2EA44F?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/Uncompressed-42.7%20kb-007ec6?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/compressed-30.9%20kb-007ec6?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/Licence-MIT-007ec6?style=for-the-badge" alt="Badge"> </div>

<br>

# Introduction

Bench Tracker is a free, no-auth, user-friendly API library that provides access to UK parliamentary member data. This project makes it easy to explore current membership, party affiliations, tenure details, and related information. It’s designed for everyone from researchers and students to journalists, educators, and civic enthusiasts who want to analyze parliamentary data without complex software or specialized expertise.

<br>
 
# Table of Contents

- [Downloading](#downloading)
	- [Different Versions](#different-versions)
	- [Download Page](#download-page)
- [Installing](#installing)
	- [In your JavaScript file](#in-your-javascript-file)
- [Usage](#usage)
	- [No Parameters](#no-parameters)
	- [First Parameter](#first-parameter)
	- [Second Parameter](#second-parameter)
- [Processing](#processing)
	- [Normalisation](#normalisation)
	- [Sanitization](#sanitization)
 - [Customisation](#customisation)
	- [Parent Names](#parent-names)
	- [Child Names](#child-names)
- [Demo](#demo)
	- [Live Demo](#live-demo)
- [Authors](#authors)
- [Credit](#credit)
- [License](#license)

<br>

# Downloading

### Different Versions
Each release provides two configuations of the project.

 - The bundled, minified format known as "production".
 - The unbundled, unminified format known as "development".

### Download Page
[https://github.com/LewisRandles/Bench-Tracker/releases](https://github.com/LewisRandles/Bench-Tracker/releases)

<br>

# Installing

### In your JavaScript file

```javascript

	// Using the unbundled version needs to be kept with the internal files.
	import benchTracker from './scripts/benchTracker_unbundled.js';

	// Using the bundled version is standalone and has no internal files.
	import benchTracker from './benchTracker_bundled.js';

```

<br>

# Usage

### No Parameters

Providing no parameters will result in the default information being set.

```javascript
await benchTracker();
```

<br>

### First Parameter

The first parameter is providing the desired `mode`. The format is case-insensitive.

| First Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `mode` | `string` |  Supported `mode` formats include `person` and `place`. |

| Usage | Type | Description |
| :-------- | :------- | :------------------------- |
| `person` | `string` | `person` enables to search using member names. |
| `place` | `string` | `place` enables to search using place names. |

```javascript

// Argument object.
await benchTracker({"mode": "person"});

```

```javascript

// External object.
const apiConfig = {
	"mode": "person"
}

await benchTracker(apiConfig);

```

<br>

### Second Parameter
The second parameter is providing the desired `name`. The format is case-insensitive.

| Second Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Supported `name` values depend on current `mode`. Any current Commons or Lords name. Any valid constituency name |

| Usage | Type | Description |
| :-------- | :------- | :------------------------- |
| `name` | `string` | `name` is where you input the desired lookup target. |

```javascript

// Argument object.
await benchTracker({"mode": "person", "name": "Nigel Farage"});

```

```javascript

// External object.
const apiConfig = {
	"mode": "person",
	"name": "Nigel Farage"
}

await benchTracker(apiConfig);

```

<br>

# Processing

### Normalisation
During normalization, raw API fields such as `"gender": "M", "latestParty": { "name": "Reform UK", "isIndependentParty": false }`, and `"latestHouseMembership": { "membershipFrom": "Clacton", "membershipEndDate": null }` are converted into a processed object such as `"gender": "Male", "party": { "partyName": "Reform UK", "isIndependentParty": "false" }`, and `"membership": { "location": "Clacton", "endDate": "No Value" };`. Objects provide more reliable and consistent access than arrays while enabling easier manipulation and processing of nested data structures. Nested objects are flattened, redundant metadata and overlapping identifiers are removed, empty or missing fields are normalized, boolean and encoded values are standardized, and all data is organized into a uniform, consistent key-value JSON structure to produce a clean and predictable final result.

### Sanitization
During sanitization, instead of leaving object values as `null` or `undefined`, missing or empty fields are filled with a placeholder such as `"no value"` to ensure that every key in the final result has a valid string; this prevents errors in downstream processing, makes the dataset fully predictable, and allows client applications to safely read and display all values without additional null checks.

<br>

# Customisation
This JSON serves as a configuration layer that lets you enable or disable individual parent and child fields and rename them through `altName`, giving you full control over which properties appear in the final output. Some values from the raw API return are intentionally omitted because they are considered unnecessary or not useful.

### Parent Names
The parents group defines the top-level fields that can be enabled, disabled, or renamed, allowing you to control which main object properties appear in the output.

```javascript

"parents": {

	"item1": {
		"name": {
			"original": "defaultName",
			"altName": "customName"
		},
		"used": true
	},

	...

}

```

### Child Names
The children group manages the nested fields within those parent objects, giving similar control over which sub-properties are included and how they are labeled.

```javascript

"children": {
	
	"item1": {
		"name": {
			"original": "defaultName",
			"altName": "customName"
		},
		"used": true,
		"validate": "checkBench"
	},

	...

}

```

<br>

# Demo

### Live Demo
Try the hosted demo via [GitHub Pages Demo](https://lewisrandles.github.io/Bench-Tracker)

<br>

# Authors

- [@LewisRandles](https://www.github.com/LewisRandles)

<br>

# Credit

 - For member API information, the [Members API](https://members-api.parliament.uk/index.html)

<br>

# License

[MIT License](https://github.com/LewisRandles/Bench-Tracker/blob/main/LICENSE)
