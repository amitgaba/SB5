jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 HEAD in the list
// * All 3 HEAD have at least one Schedule

sap.ui.require([
	"sap/ui/test/Opa5",
	"mt/vt/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"mt/vt/test/integration/pages/App",
	"mt/vt/test/integration/pages/Browser",
	"mt/vt/test/integration/pages/Master",
	"mt/vt/test/integration/pages/Detail",
	"mt/vt/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "mt.vt.view."
	});

	sap.ui.require([
		"mt/vt/test/integration/MasterJourney",
		"mt/vt/test/integration/NavigationJourney",
		"mt/vt/test/integration/NotFoundJourney",
		"mt/vt/test/integration/BusyJourney",
		"mt/vt/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});