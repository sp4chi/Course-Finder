import "./App.css";

import Navbar from "./Components/Navbar/Nav";

import Textfield from "./Components/Textfield/Textfield";

import Card from "./Components/Card/CardLogic";
import { Box } from "@mui/material";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
      <Box sx={{
        background: 'linear-gradient(270deg, #afd0de, #efcad5)'
      }}>
        <Navbar />
        <Title />
        <Textfield />

        <Card />
      </Box>



    </div>
  );
}

export default App;
