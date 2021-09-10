import { render, screen, waitFor } from "../configs/test-utils";
import userEvent from "@testing-library/user-event";
import FileTree from "../components/FileTree";
import FileList from "../file.json";

test("renders top level folder", () => {
    render(<FileTree tree={FileList} />);
    const folder = screen.queryByText("marvel");
    expect(folder).toBeInTheDocument();
});

test("renders sub level folder", async () => {
    render(<FileTree tree={FileList} />);
    const parent = screen.queryByText("marvel");
    const folder = /black_widow/i;
    expect(screen.queryByText(folder)).not.toBeInTheDocument();

    userEvent.click(parent);
    await waitFor(() => {
        expect(screen.getByText(folder)).toBeInTheDocument();
    });
});

test("renders sub level files", async () => {
    render(<FileTree tree={FileList} />);
    const file = /why-the-widow/i;
    expect(screen.queryByText(file)).not.toBeInTheDocument();
});

test("renders root folder files", () => {
    render(<FileTree tree={FileList} />);
    const file = screen.queryByText(/fact_marvel_beats_dc.txt/i);
    expect(file).toBeInTheDocument();
});
