import { render,screen } from "@testing-library/react";
import ImageTest from "./ImageTest";

test('checking the Image Test ', () => {
    render(<ImageTest/>);
    let title = screen.getByTitle('Ai generated Image');
    expect(title).toBeInTheDocument();

    
});