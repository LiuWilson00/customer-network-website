import { BinaryTree } from "@/components/binary-tree";
import { ApiGetPolicyholderDescendantsResponse } from "../policyholder.interface";
import { Card } from "@/components";
import { useState } from "react";



interface PolicyholderCardGroupProps {
    data: ApiGetPolicyholderDescendantsResponse | null;
    introducerId: number | null;
    onIdClick: (id: number) => void;
}




const PolicyholderCardGroup = (props: PolicyholderCardGroupProps) => {

    const { data, introducerId, onIdClick } = props;
    const [currentHoveredId, setCurrentHoveredId] = useState<number | null>(null);

    if (!data) {
        return (
            <div className="card-group">
                <div className="italic text-gray-500">No Data</div>
            </div>
        );
    }

    const cardColor = (node: ApiGetPolicyholderDescendantsResponse) => {
        if (introducerId === node.introducerId) {
            return 'bg-lime-950';
        }
        return 'bg-gray-800';
    }



    return <div className='card-group'>
        {data ?
            <BinaryTree
                activeId={currentHoveredId}
                root={{
                    value: data,

                    render: (node: ApiGetPolicyholderDescendantsResponse, isActive) => {
                        return <Card id={node.id} title={node.name}
                            onIdClick={(id) => { onIdClick(id) }}
                            onMouseEnter={(id) => {
                                setCurrentHoveredId(id);
                            }}
                            onMouseLeave={() => {
                                setCurrentHoveredId(null);
                            }}
                            className={`${cardColor(node)} ${isActive ? 'opacity-75' : ''}`}
                            idDisabled={introducerId === node.id}
                        ></Card>
                    },
                }}></BinaryTree> : ""}
    </div>


}

export default PolicyholderCardGroup;