Feature: As a user I want a login page so that only authentic 
	users will be able to login
         
Scenario: Valid users should be able to login 
	Given I am on a Techfios site 
	When I am enter username and password 
	And I click on signin button 
	Then Dashboard page should display 
