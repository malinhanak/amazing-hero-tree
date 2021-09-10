import { render, screen } from "../configs/test-utils";
import Footer from "../components/Footer";

test("renders amazing tree text", () => {
    render(<Footer />);
    const element = screen.getByText(/amazing/i);
    expect(element).toBeInTheDocument();
});
