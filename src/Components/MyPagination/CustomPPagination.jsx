import React from 'react';
//import classnames from 'classnames';
import { usePagination } from './usePagination';
import './styles.css'

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    //let lastPage = paginationRange[paginationRange.length - 1];
    return (

        <nav aria-label="pagination">
            <ul className="pagination">
                <li><a href="!#" onClick={onPrevious}><span aria-hidden="true">&laquo;</span><span className="visuallyhidden">previous set of pages</span></a></li>
                {paginationRange.map((pageNumber) =>
                    <li key={pageNumber}>
                        <a onClick={() => onPageChange(pageNumber)} href="!#">
                            <span className="visuallyhidden">page </span>{pageNumber}
                        </a>
                    </li>)}
                <li><a href="!#" onClick={onNext}><span className="visuallyhidden">next set of pages</span><span aria-hidden="true">&raquo;</span></a></li>
            </ul>
        </nav>
        // <ul
        //     className={classnames('pagination-container', { [className]: className })}
        // >
        //     {/* Left navigation arrow */}
        //     <li
        //         className={classnames('pagination-item', {
        //             disabled: currentPage === 1
        //         })}
        //         onClick={onPrevious}
        //     >
        //         <div className="arrow left" />
        //     </li>
        //     {paginationRange.map(pageNumber => {

        //         // If the pageItem is a DOT, render the DOTS unicode character
        //         if (pageNumber === DOTS) {
        //             return <li className="pagination-item dots">&#8230;</li>;
        //         }

        //         // Render our Page Pills
        //         return (
        //             <li
        //                 className={classnames('pagination-item', {
        //                     selected: pageNumber === currentPage
        //                 })}
        //                 onClick={() => onPageChange(pageNumber)}
        //             >
        //                 {pageNumber}
        //             </li>
        //         );
        //     })}
        //     {/*  Right Navigation arrow */}
        //     <li
        //         className={classnames('pagination-item', {
        //             disabled: currentPage === lastPage
        //         })}
        //         onClick={onNext}
        //     >
        //         <div className="arrow right" />
        //     </li>
        // </ul>
    );
};

export default Pagination;