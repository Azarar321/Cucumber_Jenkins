package org.base;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LibGlobal {

	public static WebDriver driver;

	public WebDriver launchBrowser() {
		if (driver == null) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			
		}
		return driver;
	}

	public void launchUrl() {
		try {
			driver.manage().window().maximize();
		} catch (Exception e) {
			
		}
		
		driver.get("http://adactinhotelapp.com/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	public void passValues(WebElement element, String str) {
		element.clear();
		element.sendKeys(str);
	}

	public void clickButton(WebElement element) {
		element.click();
	}

	public void selDrop(WebElement element, String str) {
		Select sel = new Select(element);
		sel.selectByValue(str);
	}
	 public static void quit() {
	 driver.close();
	
	 }

}
