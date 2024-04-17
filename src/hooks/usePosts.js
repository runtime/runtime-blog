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
            const response = await BlogAPI.get(`hello`, {
                // params: {
                //     'itemId': '1'
                // },
                // params: {
                //     'Key': {'itemId': `${query}`},
                // },
                headers: {
                    // "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                    // "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
                    // "Access-Control-Allow-Origin": "http://localhost:3000",
                    // "Content-Type": "application/json"



                    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
                    "Access-Control-Allow-Origin": "*",


                    // "Access-Control-Allow-Headers": "Content-Type,",
                    // "Access-Control-Allow-Methods": "*",
                    // "Access-Control-Allow-Credential":"false",
                    // "Access-Control-Allow-Origin": "*",
                }
            });
            console.log('[UsePosts] response.data', response);
            setPosts(response);
        } catch (err) {
            console.error(err)
        }
    };

    return [posts, search]
};



export default usePosts;

