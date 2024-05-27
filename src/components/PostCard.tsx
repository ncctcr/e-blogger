import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import {IPost} from "@/models/Post";
import { useRouter } from 'next/navigation'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tooltip from "@mui/material/Tooltip";
import Swal from 'sweetalert2'
import Box from "@mui/material/Box";
import {truncateString} from "@/utils/functions";


type TypeProps = {
    data: IPost
}

const PostCard: FC<TypeProps> = ({ data }) => {
    const router = useRouter()

    const handleDetail = () => {
        router.push(`/posts/${data.id}`)
    }

    return (
        <Card>
            <CardContent>
                <Box mb={2}>
                    <Typography variant="h5" component="div" fontWeight={'bold'}>
                        {data.title}
                    </Typography>
                </Box>
                <Typography variant="body2" dangerouslySetInnerHTML={{ __html: truncateString(data.body, 600) }} />
            </CardContent>
            <CardActions sx={{justifyContent: 'end'}}>
                <Button
                    size="small"
                    variant={'contained'}
                    startIcon={<OpenInNewIcon fontSize={'small'}/>}
                    onClick={handleDetail}
                >
                    Detail
                </Button>
            </CardActions>
        </Card>
    );
}

export default PostCard