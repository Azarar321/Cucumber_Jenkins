package org.stepDef;

import org.base.LibGlobal;
import org.openqa.selenium.By;
import org.pojo.PageObjectManager;
import org.pojo.PaymentPojo;
import org.pojo.SearchHotelPojo;
import org.pojo.SelectHotelPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefenition extends LibGlobal {
	PageObjectManager instatnce;

	@Given("User is on adactinhotel application")
	public void user_is_on_adactinhotel_application() {
		launchBrowser();
		launchUrl();
	}

	@When("User loging in by entering username and password")
	public void user_loging_in_by_entering_username_and_password() {
		instatnce = PageObjectManager.getInstatnce();
		passValues(instatnce.getLogin().getTxtUsername(), "abbacc54321");
		passValues(instatnce.getLogin().getTxtPassword(), "AbbAcc@54321");
		clickButton(instatnce.getLogin().getBtnLogin());
	}

	@When("user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels")
	public void user_enters_location_hotels_room_type_noOfRooms_checkin_checkout_adults_child_per_room_and_searchHotels() {
		SearchHotelPojo search = instatnce.getSearch();
		selDrop(search.getLocation(), "Sydney");
		selDrop(search.getHotels(), "Hotel Hervey");
		selDrop(search.getRoomType(), "Standard");
		selDrop(search.getRoomNos(), "1");
		passValues(search.getCheckIn(), "05/12/2020");
		passValues(search.getCheckOut(), "06/12/2020");
		selDrop(search.getAdultRoom(), "1");
		selDrop(search.getChildRoom(), "0");
		clickButton(search.getBtnSubmit());
	}

	@When("user selects the hotel and clicks continue button")
	public void user_selects_the_hotel_and_clicks_continue_button() {
		SelectHotelPojo select = instatnce.getSelect();
		clickButton(select.getSelectHotel());
		clickButton(select.getBtnContinue());
	}

	@When("user enter  {string}, {string}, {string},  {string},{string} and payment details")
	public void user_enter_and_payment_details(String string, String string2, String string3, String string4,
			String string5) {
		PaymentPojo paymentPojo = instatnce.getPayment();
		passValues(paymentPojo.getFirstName(), string);
		passValues(paymentPojo.getLastName(), string2);
		passValues(paymentPojo.getAddress(), string3);
		passValues(paymentPojo.getCreditCard(), string4);
		selDrop(paymentPojo.getCardtype(), "VISA");
		selDrop(paymentPojo.getExpMonth(), "4");
		selDrop(paymentPojo.getExtYear(), "2022");
		passValues(paymentPojo.getCvvNumber(), string5);
		clickButton(paymentPojo.getBookNow());

	}

	@When("user clicks book now button")
	public void user_clicks_book_now_button() {

	}

	@Then("validate the booking id")
	public void validate_the_booking_id() {
		String bookingId = driver.findElement(By.id("order_no")).getAttribute("value");
		System.out.println(bookingId);
	}

	@When("user enter  firstname, lastName and payment details")
	public void user_enter_firstname_lastName_and_payment_details() {
		PaymentPojo paymentPojo = instatnce.getPayment();
		passValues(paymentPojo.getFirstName(), "six");
		passValues(paymentPojo.getLastName(), "six");
		passValues(paymentPojo.getAddress(), "Omr");
		passValues(paymentPojo.getCreditCard(), "1234512345123451");
		selDrop(paymentPojo.getCardtype(), "VISA");
		selDrop(paymentPojo.getExpMonth(), "4");
		selDrop(paymentPojo.getExtYear(), "2022");
		passValues(paymentPojo.getCvvNumber(), "897");
		clickButton(paymentPojo.getBookNow());
	}

	@When("user clicks the book now button")
	public void user_clicks_the_book_now_button() {

	}

	@Then("validate the booking id by printing it")
	public void validate_the_booking_id_by_printing_it() {
		String bookingId = driver.findElement(By.id("order_no")).getAttribute("value");
		System.out.println(bookingId);
	}

	@When("user enter   details")
	public void user_enter_details() {
		PaymentPojo paymentPojo = instatnce.getPayment();
		passValues(paymentPojo.getFirstName(), "Seven");
		passValues(paymentPojo.getLastName(), "seven");
		passValues(paymentPojo.getAddress(), "chennai");
		passValues(paymentPojo.getCreditCard(), "98765987654987659");
		selDrop(paymentPojo.getCardtype(), "VISA");
		selDrop(paymentPojo.getExpMonth(), "4");
		selDrop(paymentPojo.getExtYear(), "2022");
		passValues(paymentPojo.getCvvNumber(), "898");
		clickButton(paymentPojo.getBookNow());
	}

	@When("user clicking the  book now button")
	public void user_clicking_the_book_now_button() {
	
	}

	@Then("validating the booking id")
	public void validating_the_booking_id() {
		String bookingId = driver.findElement(By.id("order_no")).getAttribute("value");
		System.out.println(bookingId);
	}

}
