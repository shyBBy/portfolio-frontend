import React from "react";
import {Link} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const TopPanelIcons = () => {
    return (
        <>
            <Link  href='https://github.com/shyBBy' color="inherit" underline="none">
                <GitHubIcon/>
            </Link>
            <Link  href='https://www.linkedin.com/in/dawid-olczak-6658a720a/' color="inherit" underline="none">
                <LinkedInIcon/>
            </Link>
        </>
    )
}