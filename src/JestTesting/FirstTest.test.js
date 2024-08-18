// import screen and render from test liberary

import { render,screen } from "@testing-library/react";
import FirstTest from "./FirstTest";

// here we are check the text is present in the File or Not
test('should ', () => {
    render(<FirstTest/>);
    const txt = screen.getByText("First React Test Case");
    expect(txt).toBeInTheDocument();
});

// to remove the case sensitivity we are going to use this 

test('here we are removeing the text Sensativity ', () => {
    render(<FirstTest />);
    const text = screen.getByText(/removing case Sensativity/i);
    const title = screen.getByTitle("Ai generated Image");        // to check the image title we have to use ByTitle
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
});