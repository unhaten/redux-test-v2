import React, {FC} from "react";
import {IPost} from "../models/IPost.ts";


interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void
    update: (post: IPost) => void;

}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = () => {
        const title = prompt() || ''
        update({...post, title})
    }

    return (
        <>
            <div style={{border: '2px solid yellow', marginTop: 20}} onClick={handleUpdate}>
                {post.id} - {post.title}
                <button onClick={handleRemove}>delete</button>
            </div>
        </>
    )
}

export default PostItem;