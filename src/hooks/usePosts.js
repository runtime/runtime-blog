import React, {useState, useEffect} from "react";
import BlogAPI from "../api/BlogAPI";

const usePosts = (defaultSearchQuery) => {
    // input search
    // output list of videos
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        search(defaultSearchQuery);
    }, [defaultSearchQuery]);

    const search = async (query) => {
        try {
            const response = await BlogAPI.post(`hello`, {
                // params: {
                //     'itemId': '1'
                // },
                // params: {
                //     'Key': {'itemId': `${query}`},
                // },
                // headers: {
                //     "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                //     "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
                //     "Access-Control-Allow-Origin": "*",
                //
                //     //"Access-Control-Allow-Credential":"false",
                // }
            });
            console.log('[UsePosts] response', response.data);
            //setPosts(response.data);
        } catch (err) {
            console.error(err)
        }
    };

    return [posts, search]
};



export default usePosts;

