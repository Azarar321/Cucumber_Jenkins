Feature: User is Booking room in adactinhotel webpage

Background: 
    Given User is on adactinhotel application
    When User loging in by entering username and password
    And user enters location, hotels, room-type, noOfRooms , checkin, checkout, adults, child per room and searchHotels
    And user selects the hotel and clicks continue button

  Scenario Outline: Verifying Booking id in adactinhotel webpage

    When user enter  "<firstName>", "<lastName>", "<address>",  "<ccNumber>","<cvvNumber>" and payment details
    And user clicks book now button
    Then validate the booking id

    Examples: 
      | firstName | lastName | address | ccNumber         | cvvNumber |
      | One       | one      | Chennai | 9876543219876543 |       324 |
      | Two       | two      | Chennai | 9876543219876543 |       324 |
      | Three     | three    | Chennai | 9876543219876543 |       324 |
      | Four      | four     | Chennai | 9876543219876543 |       324 |
      | Five      | five     | Chennai | 9876543219876543 |       324 |

  Scenario: Verify login function in Adactin
    When user enter  firstname, lastName and payment details
    And user clicks the book now button
    Then validate the booking id by printing it

  Scenario: user verify login
    When user enter   details
    And user clicking the  book now button
    Then validating the booking id

