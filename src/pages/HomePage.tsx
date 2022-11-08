
import React from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import { Rightbar } from "../components/Rightbar/Rightbar";
import { Feed } from "../components/Feed/Feed";
import { Sidebar } from "../components/Sidebar/Sidebar";
import './style.css'


export const HomePage = () => {

    return (
        <>
            <Container maxWidth="lg">
                <Feed/>
            </Container>
        </>
    )
};