import { Menu, MenuItem, Box, AppBar, Toolbar, Typography, IconButton, type SxProps } from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import React from "react";
import type { Theme } from "@emotion/react";

export default function Navbar() {
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchor);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchor(null);
    };

    const menuId = "primary-account-menu";
    const renderMenu = (
        <Menu anchorEl={anchor} id={menuId} keepMounted open={isMenuOpen} onClose={handleMenuClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>Register</MenuItem>
        </Menu>
    );

    const menuBarStyle: SxProps<Theme> = {
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
            <AppBar position="static" sx={menuBarStyle}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={titleStyle}>
                        Azure Animal Directory
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <IconButton size="large" edge="end" aria-label="account acties" aria-controls={menuId} aria-haspopup color="inherit"
                            onClick={handleMenuOpen}>
                            <ForestIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
};