export interface ApiGetPolicyholderDescendantsParams {
    id: number;
    depth: number;
}

export interface ApiGetPolicyholderDescendantsResponse {
    id: number;
    name: string;
    introducerId: number;
    isDeleted: boolean;
    joinDate: string;
    leftChild: ApiGetPolicyholderDescendantsResponse;
    leftChildId: number;
    rightChildId: number;
    rightChild: ApiGetPolicyholderDescendantsResponse;
    parentId: number;
}

export interface ApiCreatePolicyholderParams {

    introducerId: number;
    name: string;
}

export interface ApiCreatePolicyholderResponse {
    id: number;
    name: string;
    introducerId: number;
    isDeleted: boolean;
    joinDate: string;
    leftChildId: number;
    rightChildId: number;
    parentId: number;
}