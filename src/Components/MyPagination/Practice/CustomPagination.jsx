import './styles.css'


const CustomPagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="pagination">
            <ul className="pagination">
                <li><a href="!#" onClick={() => paginate(1)}><span aria-hidden="true">&laquo;</span><span className="visuallyhidden">previous set of pages</span></a></li>
                {pageNumbers.map((number) =>
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="!#">
                            <span className="visuallyhidden">page </span>{number}
                        </a>
                    </li>)}
                <li><a href="!#" onClick={() => paginate(pageNumbers.length)}><span className="visuallyhidden">next set of pages</span><span aria-hidden="true">&raquo;</span></a></li>
            </ul>
        </nav>);
}

export default CustomPagination;