import React, { useState } from "react";
import { FOLDER_TREE } from "../../data/data";

export interface FolderProps {
  children?: {
    name: string;
    order: number;
    children?: FolderProps["children"];
  }[];
}

const TreeFolder = () => {
  function RenderFolderRecursively({ children }: FolderProps) {
    const [openSubFolder, setOpenSubFolder] = useState<boolean>(false);
    const handleClickPlusIcon = () => {
      setOpenSubFolder(!openSubFolder);
    };
    return (
      <div>
        {children &&
          children?.length > 0 &&
          children?.map((child, index) => {
            const displayPlusIcon =
              child?.children && child?.children.length > 0;
            return (
              <div
                key={index}
                style={{
                  paddingLeft: `${child.order * 5}px`,
                  textAlign: "left",
                }}
              >
                <div>
                  {displayPlusIcon && (
                    <span
                      onClick={handleClickPlusIcon}
                      style={{ backgroundColor: "red", paddingInline: "10px" }}
                    >
                      +
                    </span>
                  )}

                  {child.name}
                </div>
                {openSubFolder && child.children && (
                  <RenderFolderRecursively children={child.children} />
                )}
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div>
      <h3>Tree Folder</h3>
      {FOLDER_TREE?.children && (
        <RenderFolderRecursively children={FOLDER_TREE?.children} />
      )}
    </div>
  );
};

export default TreeFolder;
