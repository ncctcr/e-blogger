import React, {FC} from 'react';
import NextLink from "next/link";
import {Breadcrumbs, Skeleton} from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from './CustomBreadcrumbs.module.css'
import Link from "@mui/material/Link";

type TypeProps = {
    current: string
    before?: { title: string, link: string } []
}

const CustomBreadcrumbs: FC<TypeProps> = ({before, current}) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {before && before.map((i, index) => (
                <Link component={NextLink} key={index} href={i.link} className={styles.before}>
                    <Typography variant={'h4'}>{i.title}</Typography>
                </Link>
            ))}
            {current ? (
                <Typography variant={'h4'} color={'text.primary'}>
                    {current}
                </Typography>
            ) : (
                <Skeleton variant='text' width={80}/>
            )}
        </Breadcrumbs>
    );
};

export default CustomBreadcrumbs;