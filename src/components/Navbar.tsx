import { Box, AppBar, Toolbar, Typography, type SxProps } from "@mui/material";
import type { Theme } from "@emotion/react";

export default function Navbar() {
    const navbarStyle: SxProps<Theme> = {
        background: "linear-gradient(135deg, #0b6623, #2e8b57)",
        color: "#fff",
        borderBottom: "4px solid #145f33",
        boxShadow: "0 4px 8px rgba(0,0,0,0.35)",
    };

    const titleStyle: SxProps<Theme> = {
        fontFamily: "'Merienda', cursive",
        fontSize: "1.5rem",
        letterSpacing: "1px",
        fontWeight: 600,
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={navbarStyle}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={titleStyle}>
                        Azure Animal Directory
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};