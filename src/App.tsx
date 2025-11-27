import { Typography, type SxProps, type Theme } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Search from "./components/Search.tsx";

export default function App() {
  const introStyle: SxProps<Theme> = {
    fontFamily: "'Merienda', cursive",
    color: "#2b332b",
    marginTop: { xs: "5%", lg: "3%" },
    marginBottom: { xs: "5%", lg: "3%" },
    marginLeft: "5%",
    marginRight: "5%",
  };

  return (
    <>
      <Navbar />
      <Typography variant="h6" sx={introStyle}>
        Welkom in de jungle, wie door het bos de bomen wilt zoeken kan gebruik maken van onze encyclopedie. Zoek een dier en laat Azure zijn magie maar doen.
      </Typography>
      <Search />
    </>
  )
};

