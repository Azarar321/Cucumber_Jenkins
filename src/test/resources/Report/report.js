$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "name": "User is Booking room in adactinhotel webpage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Booking id in adactinhotel webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter  \"\u003cfirstName\u003e\", \"\u003clastName\u003e\", \"\u003caddress\u003e\",  \"\u003cccNumber\u003e\",\"\u003ccvvNumber\u003e\" and payment details",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks book now button",
  "keyword": "And "
});
formatter.step({
  "name": "validate the booking id",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "address",
        "ccNumber",
        "cvvNumber"
      ]
    },
    {
      "cells": [
        "One",
        "one",
        "Chennai",
        "9876543219876543",
        "324"
      ]
    },
    {
      "cells": [
        "Two",
        "two",
        "Chennai",
        "9876543219876543",
        "324"
      ]
    },
    {
      "cells": [
        "Three",
        "three",
        "Chennai",
        "9876543219876543",
        "324"
      ]
    },
    {
      "cells": [
        "Four",
        "four",
        "Chennai",
        "9876543219876543",
        "324"
      ]
    },
    {
      "cells": [
        "Five",
        "five",
        "Chennai",
        "9876543219876543",
        "324"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactinhotel application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_adactinhotel_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User loging in by entering username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_loging_in_by_entering_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_enters_location_hotels_room_type_noOfRooms_checkin_checkout_adults_child_per_room_and_searchHotels()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the hotel and clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_and_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Booking id in adactinhotel webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter  \"One\", \"one\", \"Chennai\",  \"9876543219876543\",\"324\" and payment details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_enter_and_payment_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks book now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_clicks_book_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the booking id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.validate_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactinhotel application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_adactinhotel_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User loging in by entering username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_loging_in_by_entering_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_enters_location_hotels_room_type_noOfRooms_checkin_checkout_adults_child_per_room_and_searchHotels()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the hotel and clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_and_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Booking id in adactinhotel webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter  \"Two\", \"two\", \"Chennai\",  \"9876543219876543\",\"324\" and payment details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_enter_and_payment_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks book now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_clicks_book_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the booking id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.validate_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactinhotel application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_adactinhotel_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User loging in by entering username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_loging_in_by_entering_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_enters_location_hotels_room_type_noOfRooms_checkin_checkout_adults_child_per_room_and_searchHotels()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the hotel and clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_and_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Booking id in adactinhotel webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter  \"Three\", \"three\", \"Chennai\",  \"9876543219876543\",\"324\" and payment details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_enter_and_payment_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks book now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_clicks_book_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the booking id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.validate_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactinhotel application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_adactinhotel_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User loging in by entering username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_loging_in_by_entering_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_enters_location_hotels_room_type_noOfRooms_checkin_checkout_adults_child_per_room_and_searchHotels()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the hotel and clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_and_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Booking id in adactinhotel webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter  \"Four\", \"four\", \"Chennai\",  \"9876543219876543\",\"324\" and payment details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_enter_and_payment_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks book now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_clicks_book_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the booking id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.validate_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactinhotel application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_adactinhotel_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User loging in by entering username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_loging_in_by_entering_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_enters_location_hotels_room_type_noOfRooms_checkin_checkout_adults_child_per_room_and_searchHotels()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the hotel and clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_and_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Booking id in adactinhotel webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter  \"Five\", \"five\", \"Chennai\",  \"9876543219876543\",\"324\" and payment details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_enter_and_payment_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks book now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_clicks_book_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the booking id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.validate_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactinhotel application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_adactinhotel_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User loging in by entering username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_loging_in_by_entering_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_enters_location_hotels_room_type_noOfRooms_checkin_checkout_adults_child_per_room_and_searchHotels()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the hotel and clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_and_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify login function in Adactin",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter  firstname, lastName and payment details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_enter_firstname_lastName_and_payment_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the book now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_clicks_the_book_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the booking id by printing it",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.validate_the_booking_id_by_printing_it()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on adactinhotel application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.user_is_on_adactinhotel_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User loging in by entering username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_loging_in_by_entering_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_enters_location_hotels_room_type_noOfRooms_checkin_checkout_adults_child_per_room_and_searchHotels()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the hotel and clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_selects_the_hotel_and_clicks_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user verify login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter   details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.user_enter_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicking the  book now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.user_clicking_the_book_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validating the booking id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.validating_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});