import React, {useState} from "react";
import {Divider, Grid, Paper, Stack, Typography} from "@mui/material";
// @ts-ignore
import customSelect from './CustomSelect.module.css'

type CustomSelect = {
    label: string
    value: Array<string>
    selectItemCallback:(v:string)=>void
}
export const CustomSelect: React.FC<CustomSelect> = ({label, value,selectItemCallback}) => {
    const [activeItem, setActiveItem] = useState<string>(value[0])
    const [activeMode, setActiveMode] = useState<boolean>(true)

    const mappedValue = value.map(v => {

        const onItem = () => {
          setActiveItem(v)
        }
        const selectItem = () => {
            selectItemCallback(v)
            setActiveMode(!activeMode)
        }
        return(
            <div className={v===activeItem?customSelect.onMouseItem:''}
                 onMouseEnter={onItem}
            onClick={selectItem}>{v}</div>
        )
    })

    const onclickSelect = () => {
      setActiveMode(!activeMode)
    }

    return (
        <Typography>

            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={0}>

                    <Grid onClick={onclickSelect} item className={customSelect.select}>{activeItem}</Grid>

                {activeMode &&
                        <Grid item className={customSelect.select}>{mappedValue}</Grid>

                   }
            </Grid>

        </Typography>
    )
}