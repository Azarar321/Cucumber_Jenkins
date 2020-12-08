package org.pojo;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PaymentPojo extends LibGlobal {
	
	public PaymentPojo() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="first_name")
	private WebElement firstName;
	@FindBy(id="last_name")
	private WebElement lastName;
	@FindBy(id="address")
	private WebElement address;
	@FindBy(id="cc_num")
	private WebElement creditCard;
	@FindBy(id="cc_type")
	private WebElement cardtype;
	@FindBy(id="cc_exp_month")
	private WebElement expMonth;
	@FindBy(id="cc_exp_year")
	private WebElement extYear;
	@FindBy(id="cc_cvv")
	private WebElement cvvNumber;
	@FindBy(id="book_now")
	private WebElement bookNow;
	public WebElement getFirstName() {
		return firstName;
	}
	public WebElement getLastName() {
		return lastName;
	}
	public WebElement getAddress() {
		return address;
	}
	public WebElement getCreditCard() {
		return creditCard;
	}
	public WebElement getCardtype() {
		return cardtype;
	}
	public WebElement getExpMonth() {
		return expMonth;
	}
	public WebElement getExtYear() {
		return extYear;
	}
	public WebElement getCvvNumber() {
		return cvvNumber;
	}
	public WebElement getBookNow() {
		return bookNow;
	}
	
}
