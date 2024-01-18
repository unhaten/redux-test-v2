import {postAPI} from "../services/post.service.ts";
import PostItem from "./PostItem.tsx";
import {useState} from "react";
import {IPost} from "../models/IPost.ts";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading}
        = postAPI.useFetchAllPostsQuery(limit, {
        // pollingInterval: 1000
    })
    const [createPost, {}] = postAPI.useCreatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <>
            <div>
                {/*<button onClick={() => refetch()}>REFETCH</button>*/}
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h2>An error has occurred</h2>}
                {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
            </div>
        </>
    )
}

export default PostContainer;