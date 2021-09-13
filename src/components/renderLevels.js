import { customSorter } from "components/customSorter";
import { Accordion, AccordionTitle } from "./accordion";
import File from "components/File";

export function renderLevels(data, state, action) {
    return data.sort(customSorter).map((sublevel) => {
        // variable to hold the current folder, used for id and state check.
        const name = typeof sublevel === "object" ? sublevel.name : sublevel;
        return typeof sublevel === "object" ? (
            <Accordion key={name} isSub={true}>
                <AccordionTitle id={name} action={action} />
                {state[name] && renderLevels(sublevel.children, state, action)}
            </Accordion>
        ) : (
            <File
                key={sublevel}
                isSub={true}
                fileStyle={{
                    marginLeft: "1.5rem",
                }}
                file={sublevel}
            />
        );
    });
}
