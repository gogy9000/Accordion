import React, {useEffect, useState} from "react";
import {Grid, Tooltip, Typography} from "@mui/material";

type ClockContainerPropsType = {
    ClockLabel: string
    width?: number
}

export const ClockContainer: React.FC<ClockContainerPropsType> = (props) => {

    const initDate = () => new Date()

    const [date, setDate] = useState<Date>(initDate)

    useEffect(() => {
        setTimeout(() => {
            setDate(new Date())
        }, 1000)
    }, [date])

    return <Clock label={props.ClockLabel} date={date} width={props.width}/>


}
type ClockPropsType = {
    label: string
    date: Date

    width?: number
}
export const Clock: React.FC<ClockPropsType> = ({label, date, width}) => {

    const getTime = () => {
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const hours = date.getHours()
        return `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
    }

    return (

        <Typography component={'div'}>
            <Tooltip title={date.toLocaleDateString()}
                     enterDelay={300} leaveDelay={500}>

                <Grid container
                      direction={'column'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      bgcolor={'darkgray'}
                      borderRadius={3}
                      width={width ? width : 100}>

                    <Grid>{label}</Grid>

                    <Grid>{getTime()}</Grid>
                </Grid>
            </Tooltip>
        </Typography>

    )
}