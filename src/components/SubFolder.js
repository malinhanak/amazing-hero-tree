import React from "react";
import Accordion from "./accordion/Accordion";
import AccordionTitle from "./accordion/AccordionTitle";
import File from "./File";

/*
    SubFolder get 4 props:
    - data: some object or array of object data
    - isOpen: state check from parent to determend of a folder is in fact open.
    - Action to potentially open or close given folder.
    - the current state of the app.
*/

function SubFolder({ data, isOpen, action, state }) {
    /*
    maps over the data given to it via FileTree, in this case, subfolder object 
    and file arrays.
    */
    return data.map((sublevel) => {
        const subFolderName = sublevel.folder; // variable to hold the current folder, used for id and state check.
        return (
            isOpen && (
                <Accordion key={subFolderName} isSub={true}>
                    <AccordionTitle id={subFolderName} action={action} />
                    {state[subFolderName] &&
                        sublevel.files.map((file) => {
                            return (
                                <File
                                    key={file}
                                    isSub={true}
                                    fileStyle={{
                                        marginLeft: "1.5rem",
                                    }}
                                    file={file}
                                />
                            );
                        })}
                </Accordion>
            )
        );
    });
}

export default SubFolder;
