import { useGetPolicyholderDescendants, useCreatePolicyholder } from './policyholder.request';
import { Loading } from '@/components';
import PolicyholderCardGroup from './components/policyholder-card-group.component';
import PolicyholderSearchForm from './components/policyholder-search-form.component';
import PolicyholderCreateForm from './components/policyholder-create-form.component';
import { useEffect } from 'react';
const Policyholder = () => {
    const { createPolicyholder,
        data: createCallbackData,
        error: createCallbackError,
        isLoading, } = useCreatePolicyholder();
    const {
        data,
        isLoading: descendantLoading,
        setRequestParams: setDescendantsParams,
        requestParams: descendantsParams
    } =
        useGetPolicyholderDescendants({ id: 1, depth: 4 })


    useEffect(() => {
        if (createCallbackData) {
            setTimeout(() => {
                setDescendantsParams({
                    ...descendantsParams,
                    id: createCallbackData.introducerId,
                })
            }, 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createCallbackData])


    return <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Loading isLoading={descendantLoading}></Loading>

        <h1>Policyholder</h1>
        <PolicyholderSearchForm onSubmit={(id) => {
            setDescendantsParams({
                ...descendantsParams,
                id: parseInt(id),
            })
        }}></PolicyholderSearchForm>
        <div className='button-group'>
            {data?.parentId ? <button
                onClick={
                    () => {
                        setDescendantsParams({
                            ...descendantsParams,
                            id: data!.parentId,
                        })
                    }
                }
                disabled={descendantLoading}
                className="px-4 py-2 mr-2 font-bold text-black bg-blue-400 border border-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Find parent
            </button> : <></>}

            <PolicyholderCreateForm onSubmit={(introducerId, name) => {
                createPolicyholder(parseInt(introducerId), name)
            }} disabled={descendantLoading} ></PolicyholderCreateForm>
        </div>

        <PolicyholderCardGroup
            onIdClick={(id) => {
                setDescendantsParams({
                    ...descendantsParams,
                    id,
                })
            }}
            data={data}
            introducerId={descendantsParams.id}
        ></PolicyholderCardGroup>


    </div >
}

export default Policyholder