import { Pagination, Box } from "@mui/material";
import { Container } from "@mui/system";

const MyPagination = () => {
    return <Container component={Box} py={3} m={10}>
        <Pagination count={10} variant="outlined" />
    </Container>
}
export default MyPagination