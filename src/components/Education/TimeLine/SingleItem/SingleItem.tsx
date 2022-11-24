import React from 'react'
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import {SingleCourseInterface} from "../../../../Interfaces/CoursesInterface";
import {useTheme} from "@mui/material";

export const SingleItem = (props: any) => {

    const theme = useTheme();
    const {item} = props;

    return(
        <>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    {item.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="subtitle2" component="span" color={theme.palette.primary.main}>
                        {item.type}
                    </Typography>
                    <Typography variant="h6" component="span">
                        {item.title}
                    </Typography>
                    <Typography variant={'subtitle2'} color={theme.palette.secondary.main}>
                        {item.description}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </>
    )
}