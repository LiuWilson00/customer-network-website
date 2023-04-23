export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface RequestConfig {
    url: string;
    method: RequestMethod;
    body?: any;
    token?: string;
    query?: Record<string, string>; // 新增 query 屬性
}

export async function apiClient(config: RequestConfig): Promise<any> {
    const { url, method, body, token, query } = config;

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const requestOptions: RequestInit = {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    };

    // 判斷 URL 是路由還是完整網址
    const isCompleteURL = url.startsWith('http://') || url.startsWith('https://');
    const baseURL = isCompleteURL ? url : `${process.env.NEXT_PUBLIC_API_HOST}/${url}`;

    // 添加查詢參數
    const urlParams = query ? new URLSearchParams(query).toString() : '';
    const finalURL = urlParams ? `${baseURL}?${urlParams}` : baseURL;
    try {
        const response = await fetch(finalURL, requestOptions);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Request Error: ${errorData.message}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error: any) {
        console.error('API Request Error:', error.message);
        throw error;
    }
}


// // 使用範例：
// const GET_REQUEST: RequestConfig = {
//     url: 'https://api.example.com/data',
//     method: 'GET',
//     token: 'your_token',
// };

// const POST_REQUEST: RequestConfig = {
//     url: 'https://api.example.com/data',
//     method: 'POST',
//     body: { key: 'value' },
//     token: 'your_token',
// };

// // 請求數據
// apiClient(GET_REQUEST)
//     .then((data) => console.log('GET Data:', data))
//     .catch((error) => console.error('GET Error:', error.message));

// // 發送數據
// apiClient(POST_REQUEST)
//     .then((data) => console.log('POST Data:', data))
//     .catch((error) => console.error('POST Error:', error.message));
