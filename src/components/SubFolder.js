import React from "react";
import Accordion from "./accordion/Accordion";
import AccordionTitle from "./accordion/AccordionTitle";
import File from "./File";

function SubFolder({ data, isOpen, action, state }) {
    return data.map((sublevel) => {
        const subFolderName = sublevel.folder;
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
