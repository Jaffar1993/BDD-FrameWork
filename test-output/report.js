$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want a login page so that only authentic",
  "description": "users will be able to login",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on a Techfios site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_am_on_a_Techfios_site()"
});
formatter.result({
  "duration": 4982229200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_am_enter_username_and_password()"
});
formatter.result({
  "duration": 208439300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_signin_button()"
});
formatter.result({
  "duration": 1557792700,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.LoginSteps.i_click_on_signin_button(LoginSteps.java:32)\r\n\tat ✽.And I click on signin button(./src/test/java/features/login.feature:7)\r\n",
  "status": "pending"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});