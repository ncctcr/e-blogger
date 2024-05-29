import React, {FC} from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Box from "@mui/material/Box";

type TypeProps = {
    title: string,
    routes: { title: string, link: string }[]
}

const RoutesCard: FC<TypeProps> = ({title, routes}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant={'h5'}>{title}</Typography>
                <Box display={'flex'} flexDirection={'column'} gap={2} mt={2}>
                    {routes.map((i) => (
                        <Link component={NextLink} href={i.link}>{i.title}</Link>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default RoutesCard;