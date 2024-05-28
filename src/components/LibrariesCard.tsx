import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from "@mui/material/Typography";
import {ListItemText} from "@mui/material";
import {LIBRARIES} from "@/constants";

const LibrariesCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant={'h5'}>Used libraries</Typography>
                <List>
                    {LIBRARIES.map((i) => (
                        <ListItem>
                            <ListItemText
                                primary={i.title}
                                secondary={i.detail}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default LibrariesCard;