import Register from "../Pages/Register";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const typeIntoInputsElements = ({ email, password, confirmPassword }) => {
    const emailInputElement = screen.getByLabelText("Email address");
    const usernameInputElement = screen.getByLabelText("Username");
    const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");
  
    if (email) {
      userEvent.type(emailInputElement, email);
    }
    if (username) {
      userEvent.type(usernameInputElement, username);
    }
    if (confirmPassword) {
      userEvent.type(confirmPasswordInputElement, confirmPassword);
    }
  
    return {
      emailInputElement,
      usernameInputElement,
      confirmPasswordInputElement,
    };
  };


  describe("Test App Component", () => {
    // teardown &setup
  
    beforeEach(() => {
      render(<Register />);
    });
  
    test("Test initial inputs values", () => {
      expect(screen.getByLabelText("Email address").value).toBe("");
    //   expect(screen.getByLabelText("Username").value).toBe("");
    //   expect(screen.getByLabelText("Confirm Password").value).toBe("");
    });
  
    test("Test inputs values after typing", () => {
      let { emailInputElement } = typeIntoInputsElements({
        email: "aya@gmail.com",
      });
    //   let { usernameInputElement } = typeIntoInputsElements({
    //     username: "ayafathi",
    //   });
      expect(emailInputElement.value).toBe("aya@gmail.com");
    //   expect(usernameInputElement.value).toBe("ayafathi");
    });
    test("Test Show Error if inputs with invalid data", () => {
        let { emailInputElement } = typeIntoInputsElements({
          email: "ayagmail.com",
        });
        // let { usernameInputElement } = typeIntoInputsElements({
        //   username: "ab",
        // });
    
        let btn = screen.getByRole("button", { name: /Sign up/i });
        userEvent.click(btn);
        // fireEvent.click(btn)
        expect(
          screen.queryByText(/please enter a valid email/i)
        ).toBeInTheDocument();
        // expect(
        //   screen.queryByText(/Enter at least three characters/i)
        // ).toBeInTheDocument();
      });
    });
