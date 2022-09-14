import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'
import CardContents from "./CardContent";
import MyPagination from "../MyPagination/MyPagination";



const url = 'https://nut-case.s3.amazonaws.com/coursessc.json';


const CardLogic = () => {

  const [cards, getCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url);
      const data = response.data;

      getCards(data)
      setLoading(false)
    }

    catch (error) {
      console.log(error.response)
    }


  }

  useEffect(() => {
    fetchData()

  }, [])

  //get index of current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentCards = cards.slice(indexOfFirstPost, indexOfLastPost)


  // console.log(cards)
  return (
    <Box m={8} p={2} >

      <CardContents
        loading={loading}
        cards={currentCards}
      />
      <MyPagination />
    </Box >


  );
}

export default CardLogic;