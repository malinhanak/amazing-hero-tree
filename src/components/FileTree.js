import React from "react";
import { useAccordion } from "hooks/useAccordion";
import { Accordion, AccordionTitle } from "components/accordion";
import File from "components/File";
import SubFolder from "components/SubFolder";
import { customSorter } from "./customSorter";
import styled from "styled-components";

function FileTree({ tree }) {
    const [state, { open, close, closeAll }] = useAccordion();
    const handleFolderOpenState = (id) => (state[id] ? close(id) : open(id));
    const handleCloseAll = () => closeAll();

    return (
        <>
            <CloseAllBtn onClick={handleCloseAll}>Close all</CloseAllBtn>
            {tree.sort(customSorter).map((tree) => {
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
            })}
        </>
    );
}

export default FileTree;

const CloseAllBtn = styled.button`
    background: rgba(${(props) => props.theme.colors.secondary}, 0.8);
    color: rgba(${(props) => props.theme.colors.primary}, 1);
    padding: 0.8rem;
    border-radius: 20px 5px 20px 5px;
    border: none;
    margin: 1rem 1rem 1rem auto;
    display: flex;
    align-self: flex-end;
    transition: background 0.3s;
`;
