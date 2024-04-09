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
            const response = await BlogAPI.get(`posts/${query}`, {
                params: {
                    //'id': 1
                },
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                    "Access-Control-Allow-Methods": "GET,PUT,OPTIONS",
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "x-api-key": "1qRS60RkX1aurXTqlK4Wv36eSRSmIiTQ2F7V1zrR"
                }
            });
            console.log(response.data.items);
            setPosts(response.data.items);
        } catch (err) {
            console.error(err)
        }
    };

    return [posts, search]
};



export default usePosts;

