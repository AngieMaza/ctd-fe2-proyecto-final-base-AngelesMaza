import Quote from "../features/quote/quote";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe ("quotes component", () => {
    it ("Should render a quote randomly", async() => {
        render(<Quote />);
        const input = screen.getByPlaceholderText("Insert Quote Author name");
        userEvent.type(input, "")
        expect(await screen.findByText("Gah, stupid sexy Flanders!")).toBeInTheDocument();
    })
    it ("Should render a quote by writter", async() => {
        render(<Quote />);
        const input = screen.getByPlaceholderText("Insert Quote Author name");
        userEvent.type(input, "Nelson")
        expect(await screen.findByText("Shoplifting is a victimless crime, like punching someone in the dark.")).toBeInTheDocument();
    })
    it ("Should render a error message", async() => {
        render(<Quote />);
        const input = screen.getByPlaceholderText("Insert Quote Author name");
        userEvent.type(input, "123")
        expect(await screen.findByText("Please enter a valid name")).toBeInTheDocument();
    })
})
