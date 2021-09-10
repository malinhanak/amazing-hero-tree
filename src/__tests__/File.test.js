import { render, screen } from "configs/test-utils";
import File from "components/File";

test("should render filename", () => {
    const file = "my-glaxy-guardian.png";
    render(<File file={file} />);
    expect(screen.queryByText(file)).toBeInTheDocument();
});
