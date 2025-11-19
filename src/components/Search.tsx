import { Box, IconButton, Skeleton, TextField, type SxProps, type Theme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

export default function Search() {
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [isFailed, setFailed] = React.useState<boolean>(false);

    function toggleState(): void {
        if (!isLoading && !isFailed) {
            setLoading(true); 
        } else if(isLoading && !isFailed) {
            setLoading(false);
            setFailed(true);
        } else if(!isLoading && isFailed) {
            setLoading(true);
            setFailed(false);
        }
        console.log(isLoading, isFailed);
    };
    
    const textStyle: SxProps<Theme> = {
        fontFamily: "'Merienda', cursive",
    };

    const skeletonStyle: SxProps<Theme> = {
        marginBottom: "10px",
        width: "450px",
        height: "225px",
    };

    const imageStyle: SxProps<Theme> = {
        marginBottom: "10px",
        width: "90%",
        maxWidth: "425px",
    };

    const boxStyle: SxProps<Theme> = {
      marginLeft: "5%",
      marginRight: "5%",
      marginBottom: "5%",
      width: "90%",
    };

    const flexBoxStyle: SxProps<Theme> = {
        display: "flex",
        justifyContent: "center",
    };

    return (
        <>
            <TextField label="Zoek een dier" id="search" type="search" sx={boxStyle}
                slotProps={{
                    input: {
                        startAdornment: <IconButton onClick={toggleState}><SearchIcon sx={{ color: 'action.active', mr: 1 }} /></IconButton>
                    }}} />        
            <Box sx={boxStyle}>
                { isLoading ? 
                    <>
                        <Box sx={flexBoxStyle}>
                            <Skeleton variant="rectangular" sx={skeletonStyle} />
                        </Box>
                        <Skeleton width="90%" />
                        <Skeleton width="75%" />
                    </>
                : isFailed ? 
                    <Box sx={flexBoxStyle}>
                        <Box component="img" src="/fallback.png" alt="not-found" sx={imageStyle} />
                    </Box>
                : <p>Search result</p>
                }
            </Box>
        </>
    );
};