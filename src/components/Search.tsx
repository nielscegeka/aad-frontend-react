import { Box, IconButton, Skeleton, TextField, Typography, type SxProps, type Theme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { fetchAnimalImage } from "../services/ImageService";

export default function Search() {
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [isFailed, setFailed] = React.useState<boolean>(false);
    const [animalName, setAnimalName] = React.useState<string>("");
    const [imageSrc, setImageSrc] = React.useState<string | null>(null);
    const [waitTime, setWaitTime] = React.useState<number>(0);

    const timerRef = React.useRef<number>(null);

    const skeletonStyle: SxProps<Theme> = {
        marginBottom: "10px",
        width: "100%",
        height: "225px",
    };

    const imageStyle: SxProps<Theme> = {
        marginBottom: "10px",
        width: "90%",
        maxWidth: "425px",
        maxHeight: "500px",
        marginLeft: "auto",
        marginRight: "auto",
    };

    const boxStyle: SxProps<Theme> = {
      marginLeft: "5%",
      marginRight: "5%",
      marginBottom: { xs: "5%", sm: "2.5%", md: "2%", lg: "1%" },
      width: "90%",
    };

    const flexBoxStyle: SxProps<Theme> = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: { sm: "100%" },
        alignItems: { sm: "center" },
    };

    const textStyle: SxProps<Theme> = {
        fontFamily: "'Merienda', cursive",
        color: "#2b332b",
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnimalName(event.target.value);
    };

    const handleSearch = async () => {
        if (!animalName) {
            return;
        }

        setLoading(true);
        setFailed(false);
        setImageSrc(null);
        setWaitTime(0);

        timerRef.current = setInterval(() => {
            setWaitTime((t) => t + 1);
        }, 1000);

        const image = await fetchAnimalImage(animalName);
        if (image) {
            setImageSrc(image);
        } else {
            setFailed(true);
        }
        clearInterval(timerRef.current);
        setLoading(false);
    };

    return (
        <>
            <TextField label="Zoek een dier" id="search" type="search" sx={boxStyle} value={animalName} onChange={handleSearchChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                slotProps={{
                    input: {
                        startAdornment: <IconButton onClick={handleSearch}><SearchIcon sx={{ color: 'action.active', mr: 1 }} /></IconButton>
                    }}} />        
            <Box sx={boxStyle}>
                {
                    isLoading && 
                    <>
                        <Box sx={flexBoxStyle}>
                            <Skeleton variant="rectangular" sx={skeletonStyle} />
                            <Typography sx={textStyle}>
                                AI is de dag van vandaag toch wat trager, je bent al {waitTime} seconden aan het wachten.
                            </Typography>
                        </Box>
                    </>
                }
                {
                    isFailed &&
                    <Box sx={flexBoxStyle}>
                        <Box component="img" src="/fallback.png" alt="not-found" sx={imageStyle} />
                    </Box>
                }
                {
                    imageSrc &&
                    <Box sx={flexBoxStyle}>
                        <img src={imageSrc} alt={animalName} 
                            style={{ maxWidth: "540px", maxHeight: "480px" }} />
                    </Box>
                }
            </Box>
        </>
    );
};