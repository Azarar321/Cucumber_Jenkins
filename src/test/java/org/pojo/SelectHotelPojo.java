package org.pojo;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotelPojo extends LibGlobal {
	public SelectHotelPojo() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="radiobutton_0")
	private WebElement selectHotel;
	@FindBy(id="continue")
	private WebElement btnContinue;
	public WebElement getSelectHotel() {
		return selectHotel;
	}
	public WebElement getBtnContinue() {
		return btnContinue;
	}
}
