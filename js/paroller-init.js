// initialize paroller.js and set attributes

$(".paroller.left-circle").paroller({
	factor: 0.3,
	factorXs: 0.2,
	factorSm: 0.3,
	factorMd: 0.3,
	factorLg: 0.3,
	type: "foreground",
	direction: "horizontal",
});

$(".paroller.right-circle").paroller({
	factor: -0.3,
	factorXs: -0.2,
	factorSm: -0.3,
	factorMd: -0.3,
	factorLg: -0.3,
	type: "foreground",
	direction: "horizontal",
});
