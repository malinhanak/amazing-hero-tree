import { renderLevels } from "./renderLevels";

/*
    SubFolder get 3 props:
    - data: some object or array of object data
    - Action to potentially open or close given folder.
    - the current state of the app.
*/

function SubFolder({ data, action, state }) {
    /*
    send data from FileTree, into renderLevel as a param, a long with 
    current state and the action to open and close Accordions

    I could have place this function out in FileTree, but I personally prefer
    this clear component structure. Because while renderLevels probably could be 
    used on root level as wel as sublevel, this way there is a clear margin between
    root and underlying folder levels.

    I also find it easier to test it this way.
    */
    return renderLevels(data, state, action);
}

export default SubFolder;
