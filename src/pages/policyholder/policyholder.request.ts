import useApiRequest from "@/utils/request/use-api-reqeust.hook";
import { RequestConfig } from "@/utils/request";
import { ApiCreatePolicyholderParams, ApiCreatePolicyholderResponse, ApiGetPolicyholderDescendantsParams, ApiGetPolicyholderDescendantsResponse } from "./policyholder.interface";
import { useMemo, useState } from "react";




export const useGetPolicyholderDescendants = (params: ApiGetPolicyholderDescendantsParams) => {

    const [requestParams, setRequestParams] = useState<ApiGetPolicyholderDescendantsParams>(params)

    const requestConfig: RequestConfig = useMemo(() => ({
        url: `policyholders/${requestParams.id}/descendants/${requestParams.depth}`,
        method: 'GET',
        query: {
            id: requestParams.id.toString(),
            depth: requestParams.depth.toString(),
        },
    }), [requestParams])


    return {
        ...useApiRequest<ApiGetPolicyholderDescendantsResponse>(requestConfig),
        requestParams,
        setRequestParams
    }
}

export const useCreatePolicyholder = () => {
    const [params, setParams] = useState<ApiCreatePolicyholderParams | null>(null);

    const requestConfig: RequestConfig = useMemo(() => ({
        url: "policyholders",
        method: "POST",
        body: {
            introducerId: params?.introducerId,
            name: params?.name,
        }
    }), [params]);

    const { data, error, isLoading } = useApiRequest<ApiCreatePolicyholderResponse>(params ? requestConfig : null);

    const createPolicyholder = (introducerId: number, name: string) => {
        setParams({ name, introducerId });
    }

    return {
        createPolicyholder,
        data,
        error,
        isLoading,
    };
};