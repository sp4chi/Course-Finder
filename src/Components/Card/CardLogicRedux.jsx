import React, { useState } from "react";
import {
    Typography,
    Box
} from "@mui/material";
import { useEffect } from "react";
import { fetchUsers } from "../../Redux/card/cardAction";
import { useDispatch, useSelector } from "react-redux";
import CustomPPagination from '../MyPagination/CustomPPagination'
import BarData from "../Chart/BarData";
import CardContentRedux from "./CardContentRedux";

const CardLogicRedux = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    const cards = useSelector(state => state.card.users)
    const loading = useSelector(state => state.card.loading)

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(6);
    //get index of current post
    const indexOfLastPost = currentPage * cardsPerPage
    const indexOfFirstPost = indexOfLastPost - cardsPerPage
    const currentCards = cards.slice(indexOfFirstPost, indexOfLastPost)

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    if (loading) return <h1>Loading...</h1>

    return (
        <Box m={8}  >

            <CardContentRedux
                loading={loading}
                cards={currentCards}
            />

            <Box m={8}>
                <Typography variant="h4" gutterBottom fontWeight='normal' color='info.main'>Charts</Typography>
                <BarData
                    barData={cards}
                />
            </Box>


            <CustomPPagination
                totalCount={cards.length}
                currentPage={currentPage}
                pageSize={cardsPerPage}
                onPageChange={paginate} />


        </Box >)



}

export default CardLogicRedux;
