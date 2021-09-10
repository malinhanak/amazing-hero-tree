import React from "react";
import { useAccordion } from "../hooks/useAccordion";
import { Accordion, AccordionTitle } from "./accordion";
import File from "./File";
import SubFolder from "./SubFolder";

function FileTree({ tree }) {
    const [state, { open, close }] = useAccordion();
    const handleFolderOpenState = (id) => (state[id] ? close(id) : open(id));

    return tree.flatMap((tree) => {
        if (Array.isArray(tree)) {
            // checks if the current index is an object for folder/subfolder or an array of files.
            return tree.map((file) => <File key={file} file={file} />);
        } else {
            const folderName = tree.folder; // declaring this here for re-use and readability
            return (
                <Accordion key={folderName}>
                    <AccordionTitle
                        id={folderName}
                        action={handleFolderOpenState}
                        isOpen={state[folderName]}
                    />
                    <SubFolder
                        data={tree.subfolders}
                        isOpen={state[folderName]}
                        action={handleFolderOpenState}
                        state={state}
                    />
                </Accordion>
            );
        }
    });
}

export default FileTree;
