const Pagination = ({ lastPage, pagesInCurrentBlock, setCurrentPage, currentPage}) => {
    const FIRST_PAGE = 1
    const handleNextPage = () => {
        setCurrentPage((prevState) => {
            const nextPage = prevState + 1 
            if (nextPage <= lastPage) return nextPage
            return prevState
        })
    }
    const handleLastPage = () => setCurrentPage(lastPage)

    const handlePreviousPage = () => {
    setCurrentPage((prevPage) => {
        const newPage = prevPage - 1 
        if (newPage >= FIRST_PAGE) return newPage
        return prevPage
    })
    }
    const handleFirstPage = () => setCurrentPage(FIRST_PAGE)
  return (
        <ul className="pagination-ul">
            {currentPage >= 2 && <li className="li-arrows" onClick={handleFirstPage}>{'<<'}</li>}
            {currentPage >= 2 && <li className="li-arrows" onClick={handlePreviousPage}>{'<'}</li>}
            { 
                pagesInCurrentBlock.map((page) => <li className={`${currentPage === page ? "current-li" : "pagination-li" }`} key={page} onClick={() => setCurrentPage(page)}>{page}</li>)
            }
            <li className="li-arrows" onClick={handleNextPage}>{'>'}</li>
            <li className="li-arrows" onClick={handleLastPage}>{'>>'}</li>
        </ul>
  );
};
export default Pagination