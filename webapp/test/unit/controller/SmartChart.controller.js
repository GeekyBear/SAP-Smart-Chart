/*global QUnit*/

sap.ui.define([
	"smart_chart/controller/SmartChart.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SmartChart Controller");

	QUnit.test("I should test the SmartChart controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
