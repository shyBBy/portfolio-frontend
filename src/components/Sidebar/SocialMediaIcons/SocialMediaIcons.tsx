import react from 'react'
import './style.css';
import gitHub from '../../../assets/icons/github-icon.svg'
import gitLab from '../../../assets/icons/gitlab.svg'
import linkedin from '../../../assets/icons/linkedin-icon.svg'
import behance from '../../../assets/icons/behance-icon.svg'
import { Link, Navigate } from 'react-router-dom';
import { Stack } from '@mui/material';

export const SocialMediaIcons = () => {

    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="center">
                <a href="https://github.com/shyBBy"><img className="socialMediaIcons" src={gitHub} /></a>
                <a href="https://gitlab.com/shyBBy"><img className="socialMediaIcons" src={gitLab} /></a>
                <a href="https://www.linkedin.com/in/dawid-olczak-6658a720a/"><img className="socialMediaIcons" src={linkedin} /></a>
                <a href="https://www.behance.net/edekkredekc94c"><img className="socialMediaIcons" src={behance} /></a>
            </Stack>
        </>
        )
}