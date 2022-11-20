import React from "react";
import {Project} from "../Project/Project";
import {Data} from '../data'

export const ProgrammingList = () => {
    return(
        <>
            {Data.project.map((single) => (
                <Project project={single} tags={single.tags}/>
            ))}
        </>
    )
}