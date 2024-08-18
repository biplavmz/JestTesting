import InputBoxTest from "./InputBoxTest";
import { screen } from "@testing-library/react";

test('Input Box Test ', () => {
    InputBoxTest();
    let checkInput = screen.getByRole('textbox')  // where textbox is predefine for input box
    let checkPlaceholder = screen.getByPlaceholderText('Enter Your Name');
    expect(checkInput).toBeInTheDocument();
    expect(checkPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name","username");
    expect(checkInput).toHaveAttribute("id","userid");
    expect(checkInput).toHaveAttribute("value","raju chodhary");

    
});
