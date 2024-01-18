import {postAPI} from "../services/post.service.ts";
import PostItem from "./PostItem.tsx";
import {useState} from "react";
import {IPost} from "../models/IPost.ts";

const PostContainer = () => {
    const [limit] = useState(100)
    const {data: posts, error, isLoading}
        = postAPI.useFetchAllPostsQuery(limit, {
        // pollingInterval: 1000
    })
    const [createPost,
        {
            error: createError,
            isLoading: isCreateLoading
        }] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <>
            <div>
                {/*<button onClick={() => refetch()}>REFETCH</button>*/}
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading users...</h1>}
                {error && <h2>An error has occurred on users</h2>}
                {isCreateLoading && <h1>Loading posts...</h1>}
                {createError && <h2>Error on posts</h2>}
                {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} key={post.id}
                                                      post={post}/>)}
            </div>
        </>
    )
}

export default PostContainer;