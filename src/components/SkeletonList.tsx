import React, {FC} from 'react';
import {Skeleton} from "@mui/material";

type TypeProps = {
    count: number
}

const SkeletonList: FC<TypeProps> = ({count}) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <Skeleton key={index} variant="rounded" width="100%" height={170} />
            ))}
        </>
    );
};

export default SkeletonList;