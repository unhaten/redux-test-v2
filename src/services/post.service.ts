import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost.ts";

export const postAPI = createApi({
        reducerPath: 'postAPI',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
        tagTypes: ['Post'],
        endpoints: (build) => ({
            fetchAllPosts: build.query<IPost[], number>({
                query: (limit: number = 5) => ({
                    url: '/posts',
                    params: {
                        _limit: limit
                    }
                }),
                providedTags: result => ['Post']

            }),
            // тип объекта, который вернется и тип объекта, который мы ожидаем
            createPost: build.mutation<IPost, IPost>({
                query: (post) => ({
                    url: '/posts',
                    method: 'POST',
                    body: post
                }),
                invalidatesTags: ['Post']
            })
        })
    }
)