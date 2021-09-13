import { render, screen } from "configs/test-utils";
import SubFolder from "components/SubFolder";
import FileList from "file.json";
import { createTree } from "createTree";

test("should render subfolder files if subfolder is open", () => {
    const state = { marvel: true, black_widow: true };
    const data = createTree(FileList)[0].children;
    const handleFolderOpenState = () => {};
    render(
        <SubFolder
            data={data}
            isOpen={true}
            action={handleFolderOpenState}
            state={state}
        />
    );
    const file = /why-the-widow/i;
    expect(screen.queryByText(file)).toBeInTheDocument();
});

test("should not render subfolder files if subfolder is closed", () => {
    const state = { marvel: true };
    const data = createTree(FileList)[0].children;
    const handleFolderOpenState = () => {};
    render(
        <SubFolder
            data={data}
            isOpen={true}
            action={handleFolderOpenState}
            state={state}
        />
    );
    const file = /why-the-widow/i;
    expect(screen.queryByText(file)).not.toBeInTheDocument();
});
