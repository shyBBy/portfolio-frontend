
import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Rightbar } from "../components/Rightbar/Rightbar";
import { Feed } from "../components/Feed/Feed";
import { Sidebar } from "../components/Sidebar/Sidebar";
import './style.css'


export const MainPage = () => {

    return (
        <>
           <Container>
              <Box>
                 <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                  </Stack>
               </Box>
            </Container>
        </>
    )
};