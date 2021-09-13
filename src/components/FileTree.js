import React from "react";
import { useAccordion } from "hooks/useAccordion";
import { Accordion, AccordionTitle } from "components/accordion";
import File from "components/File";
import SubFolder from "components/SubFolder";
import { customSorter } from "customSorter";

function FileTree({ tree }) {
    const [state, { open, close }] = useAccordion();
    const handleFolderOpenState = (id) => (state[id] ? close(id) : open(id));

    return tree.sort(customSorter).map((item) => {
        if (typeof item === "string") {
            return <File key={item} file={item} />;
        } else {
            const folderName = item.name; // declaring this here for re-use and readability
            return (
                <Accordion key={folderName}>
                    <AccordionTitle
                        id={folderName}
                        action={handleFolderOpenState}
                        isOpen={state[folderName]}
                    />
                    {state[folderName] && (
                        <SubFolder
                            data={item.children}
                            action={handleFolderOpenState}
                            state={state}
                        />
                    )}
                </Accordion>
            );
        }
    });
}

export default FileTree;
