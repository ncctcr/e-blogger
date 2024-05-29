import React, {FC} from 'react';
import NextLink from "next/link";
import {Breadcrumbs} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

type TypeProps = {
    current: string
    before?: { title: string, link: string } []
}

const CustomBreadcrumbs: FC<TypeProps> = ({before, current}) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {before && before.map((i, index) => (
                <Link component={NextLink} key={index} href={i.link} className={'custom-link'} color={'text.primary'}>
                    <Typography variant={'h4'}>{i.title}</Typography>
                </Link>
            ))}
            <Typography variant={'h4'} color={'text.primary'}>
                {current}
            </Typography>
        </Breadcrumbs>
    );
};

export default CustomBreadcrumbs;