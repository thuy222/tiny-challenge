import { FolderProps } from "../pages/treeFolder/TreeFolder";

export const FOLDER_TREE : FolderProps = {
    children: [
      {
        name: "Node_Modules",
        order: 1,
        children: [
          {
            name: "bin",
            order: 2,
            children: [
              {
                name: "browser_list",
                order: 3,
              },
            ],
          },
        ],
      },
      {
        name: "Public",
        order: 1,
      },
      {
        name: "src",
        order: 1,
        children: [{ name: "assets", order: 2 }],
      },
      {
        name: "pages",
        order: 1,
      },
    ],
  };