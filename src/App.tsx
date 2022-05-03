import React from "react";
// @ts-ignore
import s from './App.module.css'
import {ToDoBlock} from "./ToDoBlock";
import {Container, Grid, Typography} from "@mui/material";
import ButtonAppBar from "./ButtonAppBar";


export const App = () => {
    return (
        <div>

            <ButtonAppBar/>
            <Typography mt={4}>

                    <Container fixed>
                        <Grid container spacing={1} >
                            <Grid item>
                                <ToDoBlock/>
                            </Grid>

                        </Grid>
                    </Container>

            </Typography>

        </div>
    )

}
