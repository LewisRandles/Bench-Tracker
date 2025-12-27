export const benchNames = {

	"parents": {

		"item1": {
			"name": {
				"original": "bench",
				"altName": "bench"
			},
			"used": true
		},

		"item2": {
			"name": {
				"original": "latestHouseMembership",
				"altName": "membership"
			},
			"used": true
		},

		"item3": {
			"name": {
				"original": "membershipStatus",
				"altName": "status"
			},
			"used": true
		},

		"item4": {
			"name": {
				"original": "latestParty",
				"altName": "party"
			},
			"used": true
		}

	},

	"children": {

		"item1": {
			"name": {
				"original": "gender",
				"altName": "gender"
			},
			"used": true,
			"validate": "checkBench"
		},

		"item2": {
			"name": {
				"original": "nameDisplayAs",
				"altName": "memberName"
			},
			"used": true,
			"validate": "checkBench"
		},

		"item3": {
			"name": {
				"original": "thumbnailUrl",
				"altName": "thumbnailUrl"
			},
			"used": true,
			"validate": "checkBench"
		},

		"item4": {
			"name": {
				"original": "membershipEndDate",
				"altName": "endDate"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item5": {
			"name": {
				"original": "membershipEndReason",
				"altName": "endReason"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item6": {
			"name": {
				"original": "membershipEndReasonNotes",
				"altName": "endReasonNotes"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item7": {
			"name": {
				"original": "membershipFrom",
				"altName": "location"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item8": {
			"name": {
				"original": "membershipStartDate",
				"altName": "startDate"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item9": {
			"name": {
				"original": "statusDescription",
				"altName": "description"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item10": {
			"name": {
				"original": "statusIsActive",
				"altName": "isActive"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item11": {
			"name": {
				"original": "statusNotes",
				"altName": "notes"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item12": {
			"name": {
				"original": "statusStartDate",
				"altName": "startDate"
			},
			"used": true,
			"validate": "checkParty"
		},

		"item13": {
			"name": {
				"original": "abbreviation",
				"altName": "abbreviation"
			},
			"used": true,
			"validate": "checkMembership"
		},

		"item14": {
			"name": {
				"original": "backgroundColour",
				"altName": "backgroundColour"
			},
			"used": true,
			"validate": "checkMembership"
		},

		"item15": {
			"name": {
				"original": "foregroundColour",
				"altName": "foregroundColour"
			},
			"used": true,
			"validate": "checkMembership"
		},

		"item16": {
			"name": {
				"original": "isIndependentParty",
				"altName": "isIndependentParty"
			},
			"used": true,
			"validate": "checkMembership"
		},

		"item17": {
			"name": {
				"original": "isLordsMainParty",
				"altName": "isLordsMainParty"
			},
			"used": true,
			"validate": "checkMembership"
		},

		"item18": {
			"name": {
				"original": "isLordsSpiritualParty",
				"altName": "isLordsSpiritualParty"
			},
			"used": true,
			"validate": "checkMembership"
		},

		"item19": {
			"name": {
				"original": "name",
				"altName": "partyName"
			},
			"used": true,
			"validate": "checkMembership"
		}

	}

};