package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginSteps {
	
	WebDriver driver;
	LoginPage Login;
	@Given("^I am on a Techfios site$")
	public void i_am_on_a_Techfios_site() throws Throwable {
		driver = BrowserFactory.init();
		Login = PageFactory.initElements(driver, LoginPage.class);
	}

	@When("^I am enter username and password$")
	public void i_am_enter_username_and_password() throws Throwable {
		Login = PageFactory.initElements(driver, LoginPage.class);
		Login.EnterUserName("demo@techfios.com");
		Login.EnterPassword("abc123");
	}

	@When("^I click on signin button$")
	public void i_click_on_signin_button() throws Throwable {
		Login.ClickLoginButton();
	    throw new PendingException();
	}




}
