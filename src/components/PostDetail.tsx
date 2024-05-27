'use client'
import React, {FC, useEffect, useRef, useState} from 'react';
import {useAppSelector, useAppStore} from "@/store/hooks";
import {deletePost, fetchDetailPost} from "@/store/features/postsSlice";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import {Skeleton} from "@mui/material";
import AlertMessage from "@/components/AlertMessage";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import PostForm from "@/components/PostForm";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import {truncateString} from "@/utils/functions";
import {useRouter} from "next/navigation";
import Loading from "@/components/Loading";

type TypeProps = {
    id: number
}

const PostDetail: FC<TypeProps> = ({ id }) => {
    const router = useRouter()
    const store = useAppStore()
    const initialized = useRef(false)
    const [editMode, setEditMode] = useState(false)
    const [loading, setLoading] = useState(false)

    const {
        post,
        status,
        error
    } = useAppSelector((state) => state.posts.detail)

    useEffect(() => {
        if (!initialized.current) {
            if (!post || post && post.id !== id) {
                store.dispatch(fetchDetailPost(id));
            }
            initialized.current = true;
        }
    }, [store, id]);

    const toggleEditMode = () => setEditMode(!editMode)

    const handleDelete = () => {
        if (post) {
            Swal.fire({
                title: `Delete "${truncateString(post.title, 10)}"`,
                text: `Are you sure you want to delete this post?`,
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonColor: '#fc4646'
            }).then((result) => {
                if (result.isConfirmed) {
                    setLoading(true)
                    store.dispatch(deletePost(post.id)).then(() => {
                        setLoading(false)
                        router.push('/posts')
                    }).catch(() => {
                        setLoading(false)
                    })
                }
            })
        }
    }

    return (
        <Box>
            {post && (
                <Card>
                    <CardContent>
                        {editMode ? (
                            <PostForm
                                initialValues={{title: post.title, body: post.body}}
                                onSubmit={() => {}}
                            />
                        ) : (
                            <>
                                <Box mb={2}>
                                    <Typography variant="h5" component="div" fontWeight={'bold'}>
                                        {post.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" dangerouslySetInnerHTML={{ __html: post.body }} />
                            </>
                        )}
                    </CardContent>
                    <CardActions sx={{justifyContent: 'end'}}>
                        <Tooltip title="Edit" placement='top' arrow>
                            <IconButton size="small" onClick={toggleEditMode} color={editMode ? 'primary' : 'inherit'}>
                                <EditIcon fontSize={'small'}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete" placement='top' arrow>
                            <IconButton size="small" onClick={handleDelete}>
                                <DeleteIcon fontSize={'small'}/>
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </Card>
            )}
            {status === 'loading' && (<Skeleton variant="rounded" width="100%" height={370} />)}
            {error && (<AlertMessage variant={'error'} title={'Error'} body={error} />)}
            {loading && <Loading/>}
        </Box>
    );
};

export default PostDetail;