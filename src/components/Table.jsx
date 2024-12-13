import React, { useEffect, useState } from "react"

function Table() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of rows per page
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Calculate pagination details
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const changePage = (page) => {
        if (page > 0 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <>
            <div style={{ margin: "20px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Paginated Table</h1>
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div>
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ width: "10%" }}>ID</th>
                                    <th style={{ width: "45%" }}>Title</th>
                                    <th style={{ width: "45%" }}>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div
                            className="d-flex justify-content-between align-items-center"
                            style={{ marginTop: "20px" }}
                        >
                            <button
                                className="btn btn-primary"
                                style={{ width: "100px" }}
                                onClick={() => changePage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className="btn btn-primary"
                                style={{ width: "100px" }}
                                onClick={() => changePage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Table