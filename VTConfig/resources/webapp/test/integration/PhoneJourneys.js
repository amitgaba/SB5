jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"mt/vt/test/integration/NavigationJourneyPhone",
		"mt/vt/test/integration/NotFoundJourneyPhone",
		"mt/vt/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});