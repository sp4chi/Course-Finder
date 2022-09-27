import "./App.css";

import Navbar from "./Components/Navbar/Nav";

import Textfield from "./Components/Textfield/Textfield";

import CardLogicRedux from "./Components/Card/CardLogicRedux";
import { Box } from "@mui/material";
import Title from "./Components/Title/Title";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Box sx={{
          background: 'linear-gradient(270deg, #afd0de, #efcad5)'
        }}>
          <Navbar />
          <Title />
          <Textfield />
          <CardLogicRedux />
        </Box>
      </div>
    </Provider>
  );
}

export default App;
