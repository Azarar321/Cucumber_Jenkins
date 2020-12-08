package org.pojo;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotelPojo extends LibGlobal {

	public SearchHotelPojo() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "location")
	private WebElement location;
	@FindBy(id = "hotels")
	private WebElement hotels;
	@FindBy(id = "room_type")
	private WebElement roomType;
	@FindBy(id = "room_nos")
	private WebElement roomNos;
	@FindBy(id = "datepick_in")
	private WebElement checkIn;
	@FindBy(id = "datepick_out")
	private WebElement checkOut;

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getRoomNos() {
		return roomNos;
	}

	public WebElement getCheckIn() {
		return checkIn;
	}

	public WebElement getCheckOut() {
		return checkOut;
	}

	public WebElement getAdultRoom() {
		return adultRoom;
	}

	public WebElement getChildRoom() {
		return childRoom;
	}

	public WebElement getBtnSubmit() {
		return btnSubmit;
	}

	@FindBy(id = "adult_room")
	private WebElement adultRoom;
	@FindBy(id = "child_room")
	private WebElement childRoom;
	@FindBy(id = "Submit")
	private WebElement btnSubmit;

}
