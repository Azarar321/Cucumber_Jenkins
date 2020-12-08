package org.test;

import org.base.JVMReporter;
import org.base.LibGlobal;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src\\test\\resources" }, dryRun = false, glue = "org.stepDef", plugin = { "pretty",
		"html:C:\\Users\\Azar. A. R\\eclipse-workspace-oxy\\C_ScenarioOutline\\src\\test\\resources\\Report",
		"json:C:\\Users\\Azar. A. R\\eclipse-workspace-oxy\\C_ScenarioOutline\\src\\test\\resources\\Report\\file.json",
		"junit:C:\\Users\\Azar. A. R\\eclipse-workspace-oxy\\C_ScenarioOutline\\src\\test\\resources\\Report\\repFile.xml" ,"json:src\\\\test\\\\resources\\\\JVM_Report\\\\Jvmreport.json" }, monochrome = true)
public class TestRunner extends LibGlobal {

	@AfterClass
	public static void close() {
//		JVMReporter.generateJvmReport(
//				"C:\\Users\\Azar. A. R\\eclipse-workspace-oxy\\C_ScenarioOutline\\src\\test\\resources\\JVM_Report\\Jvmreport.json");
		quit();

	}
}
