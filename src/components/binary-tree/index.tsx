import React from "react";
import { BinaryTreeNode, BinaryTreeNodeValue } from "./binary-tree.interface";

interface BinaryTreeProps<T extends BinaryTreeNodeValue<T>> {
  root: BinaryTreeNode<T> | null;
  isParentActive?: boolean;
  activeId?: number | null;
}

export const BinaryTree = <T extends BinaryTreeNodeValue<T>>(
  { root, activeId, isParentActive }: BinaryTreeProps<T>
) => {
  if (!root) {
    return <></>
  }

  const _isParentActive = isParentActive || activeId === root.value?.id;


  return (
    <div className="flex flex-col items-center">
      <div className="border border-black p-1 mb-2">
        {root.render(root.value, _isParentActive)}
      </div>
      <div className="flex justify-between w-full">
        <BinaryTree
          activeId={activeId}
          isParentActive={_isParentActive}
          root={
            root.value.leftChild
              ? new BinaryTreeNode(
                root.value.leftChild,
                root.render,
              )
              : null
          }
        />
        <BinaryTree
          activeId={activeId}
          isParentActive={_isParentActive}
          root={
            root.value.rightChild
              ? new BinaryTreeNode(
                root.value.rightChild,
                root.render,
              )
              : null
          }
        />
      </div>
    </div>
  );
};
