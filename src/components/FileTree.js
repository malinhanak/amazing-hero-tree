import React from "react";
import { useAccordion } from "hooks/useAccordion";
import { Accordion, AccordionTitle } from "components/accordion";
import File from "components/File";
import SubFolder from "components/SubFolder";
import { customSorter } from "./customSorter";

function FileTree({ tree }) {
    const [state, { open, close }] = useAccordion();
    const handleFolderOpenState = (id) => (state[id] ? close(id) : open(id));

    return tree.sort(customSorter).map((tree) => {
        // declaring this here for re-use and readability
        const name = typeof tree === "string" ? tree : tree.name;
        return typeof tree === "object" ? (
            <Accordion key={name}>
                <AccordionTitle
                    id={name}
                    action={handleFolderOpenState}
                    isOpen={state[name]}
                />
                {state[name] && (
                    <SubFolder
                        data={tree.children}
                        action={handleFolderOpenState}
                        state={state}
                    />
                )}
            </Accordion>
        ) : (
            <File key={name} file={name} />
        );
    });
}

export default FileTree;
