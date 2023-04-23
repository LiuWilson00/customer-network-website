export interface BinaryTreeNodeValue<T> {
    leftChild: T | null;
    rightChild: T | null;
    id: number;
}

export class BinaryTreeNode<T extends BinaryTreeNodeValue<T>> {
    constructor(
        public value: T,
        public render: (value: T, isActive?: boolean) => JSX.Element,
    ) { }
}
