package org.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReporter  {
	
	public static void generateJvmReport(String jsonFile) {
		File file= new File("C:\\Users\\Azar. A. R\\eclipse-workspace-oxy\\C_ScenarioOutline\\src\\test\\resources\\JVM_Report");
		
		Configuration config = new Configuration(file, "C_ScenarioOutline");
		config.addClassifications("SprintNum", "5");
		config.addClassifications("Browser", "Chrome");
		config.addClassifications("Os", "Windows 10");
		
		List<String> list=   new ArrayList<String>();
		list.add(jsonFile);
		
		ReportBuilder builder=new ReportBuilder(list, config);
		builder.generateReports();
	}

}
