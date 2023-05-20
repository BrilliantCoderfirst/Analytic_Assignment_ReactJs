import React, { useEffect, useState } from 'react';
import Button from './Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';

const DataGrid = () => {

    // console.log("-----", data);

  const [currentPage, setCurrentPage] = useState(1);
//   const [data, setData] = useState([]);
  const totalPages = 10;


    // function firstTimeFetchData() {
    //     const url = `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`;
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    //     .catch((err) => console.log(err));
    // }

    // useEffect(() => {
    //     firstTimeFetchData();
    // }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
        <div className="tableContainer">
            <div className="tableContainer_Center">
                <div className="mainTableHeading">
                    <p>Table</p>
                </div>

                <div className="table_box">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No <FontAwesomeIcon icon={faSort} /></th>
                                <th>UserId <FontAwesomeIcon icon={faSort} /></th>
                                <th>Id <FontAwesomeIcon icon={faSort} /></th>
                                <th>Title <FontAwesomeIcon icon={faSort} /></th>
                                <th>Body <FontAwesomeIcon icon={faSort} /></th>
                                {/* <th>Phone <FontAwesomeIcon icon={faSort} /></th>
                                <th>Company Name <FontAwesomeIcon icon={faSort} /></th>
                                <th>Action <FontAwesomeIcon icon={faSort} /></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John@123</td>
                                <td>John Martin</td>
                                <td>John@gmail.com</td>
                                <td>California, America, USA</td>
                                <td>3478654321</td>
                                <td>Pizza</td>
                                <td><Button text="Posts" /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John@123</td>
                                <td>John Martin</td>
                                <td>John@gmail.com</td>
                                <td>California, America, USA</td>
                                <td>3478654321</td>
                                <td>Pizza</td>
                                <td><Button text="Posts" /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John@123</td>
                                <td>John Martin</td>
                                <td>John@gmail.com</td>
                                <td>California, America, USA</td>
                                <td>3478654321</td>
                                <td>Pizza</td>
                                <td><Button text="Posts" /></td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="pagination_right">
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}  />
                    </div>



                    {/* <div className="pagination">
                        <p>First</p>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>5</li>
                            <li>5</li>
                            <li>5</li>
                            <li>5</li>
                        </ul>
                        <p>Last</p>
                    </div> */}
                </div>


            </div>
        </div>
    </>
  )
}

export default DataGrid;