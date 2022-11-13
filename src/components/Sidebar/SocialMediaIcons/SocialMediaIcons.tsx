import react from 'react'
import './style.css';
import gitHub from '../../../assets/icons/github-icon.svg'
import gitLab from '../../../assets/icons/gitlab.svg'
import linkedin from '../../../assets/icons/linkedin-icon.svg'
import behance from '../../../assets/icons/behance-icon.svg'
import { Link, Navigate } from 'react-router-dom';
import {Box, Stack } from '@mui/material';

export const SocialMediaIcons = () => {

    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="center">
                    <a href="https://github.com/shyBBy">
                        <i className="fa-brands fa-github fa-xl socialMediaIcons"></i>
                    </a>
                    <a href="https://gitlab.com/shyBBy">
                        <i className="fa-brands fa-gitlab fa-xl socialMediaIcons"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/dawid-olczak-6658a720a/">
                        <i className="fab fa-linkedin fa-xl socialMediaIcons"></i>
                    </a>
                    <a href="https://www.behance.net/edekkredekc94c">
                        <i className="fa-brands fa-behance fa-xl socialMediaIcons"></i>
                    </a>
            </Stack>
        </>
        )
}