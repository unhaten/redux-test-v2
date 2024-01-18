import {FC} from "react";
import {IPost} from "../models/IPost.ts";


interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <>
            <div>
                {post.id} - {post.title}
                <button>delete</button>
            </div>
        </>
    )
}

export default PostItem;