/*
  This functions takes in the array of paths, establishes a root position
  and loops over every path in the array, splitting then at every / to get 
  all the individual folder and files, aka. levels.

  It reset the moving pointer to top level, an this is very important, because
  otherwise the match that is retrived might not be from root level.

  It then loops over evert pathList created by the split in a for of loop, 
  matching current name (node) with the items in root.

  If no math is found a new node is created, if current this node is a 
  file (determind if it includes a . for file extension or not), it gets
  pushed into the right level array as a string, otherwise as an object
  with name: string and children: array.

  If current level is complete, move on to the next.

  WOOPS: This is a codesnippet I found after several attempts to achive this,
  it turns out I complicated it way more than I needed to. I have edited the
  codesnippet below slightly to suit my needs better.
*/

export function createTree(srcList) {
    let destList = [];
    srcList.forEach((path) => {
        let pathList = path.split("/");
        let levelList = destList;
        for (let name of pathList) {
            let obj = levelList.find((item) => item.name === name);
            if (!obj) {
                obj = !name.includes(".") ? { name, children: [] } : name;
                levelList.push(obj);
                /* If the current node to be added is a leaf node, 
                    the sub node attribute of the node will be trimmed */
                if (name === pathList[pathList.length - 1]) delete obj.children;
            }
            levelList = obj.children;
        }
    });
    return destList;
}
