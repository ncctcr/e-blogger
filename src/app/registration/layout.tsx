import * as React from "react";
import Container from "@mui/material/Container";

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <Container maxWidth={'lg'}>
            {props.children}
        </Container>
    )
}

export default Layout

