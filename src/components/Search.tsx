import { Box, IconButton, Skeleton, TextField, type SxProps, type Theme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { fetchAnimalImage } from "../services/ImageService";

export default function Search() {
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [isFailed, setFailed] = React.useState<boolean>(false);
    const [animalName, setAnimalName] = React.useState<string>("");
    const [imageSrc, setImageSrc] = React.useState<string | null>(null);

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

        const image = await fetchAnimalImage(animalName);
        if (image) {
            setImageSrc(image);
        } else {
            setFailed(true);
        }
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
                    <img src={imageSrc} alt={animalName} style={{ maxWidth: "100%" }} />
                }
            </Box>
        </>
    );
};