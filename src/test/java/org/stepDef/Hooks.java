package org.stepDef;

import java.util.Date;

import org.base.LibGlobal;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks extends LibGlobal {
	@Before
	public WebDriver openbrowser() {
		if (driver == null) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}
		return driver;
	}
	
	@After
	public void closeBrowser(){
		System.out.println(new Date());
	}

}
