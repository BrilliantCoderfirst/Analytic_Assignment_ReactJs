import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../components/Pagination";
import { UseContextApi } from "../App";
import { Link } from 'react-router-dom';


const Posts = () => {

  const { inputSearchData } = useContext(UseContextApi);
    

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);
  const totalPages = totalPosts.length / 10;


  function handleTotalPostsFun() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTotalPosts(data))
      .catch((err) => console.log(err));
  }

  function firstTimeFetchData() {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${(currentPage - 1) * 10}&_limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  function accordingToPagesFun(page) {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * 10}&_limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    var arr = [];
    if (inputSearchData === "") {
        firstTimeFetchData();
    }
    else {
       setData([]);
       handleTotalPostsFun();
       for (let i = 0; i < totalPosts.length; i++) {
           if ((totalPosts[i].title).includes(inputSearchData)) {
                console.log(totalPosts[i].title);
                arr.push(totalPosts[i]);
            }
            setData(arr);
       }

    }
    handleTotalPostsFun();
  }, [inputSearchData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    accordingToPagesFun(page);
  };




  return (
    <>
      <div className="tableContainer">
        <div className="tableContainer_Center">

          <div className="mainTableHeading">
            <p>Posts</p>
          </div>

          <div className="table_box">
            <table>
              <thead>
                <tr>
                  <th>
                    S.No <FontAwesomeIcon icon={faSort} />
                  </th>
                  <th>
                    UserId <FontAwesomeIcon icon={faSort} />
                  </th>
                  <th>
                    Id <FontAwesomeIcon icon={faSort} />
                  </th>
                  <th className="secondLast_th_posts">
                    Title <FontAwesomeIcon icon={faSort} />
                  </th>
                  <th className="last_th_posts">
                    Body <FontAwesomeIcon icon={faSort} />
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    data.length !== 0 ? (
                        data.map((items, index) => (
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{items.userId}</td>
                            <td>{items.id}</td>
                            <td className="secondLast_td_posts">{items.title}</td>
                            <td className="last_td_posts">{items.body}</td>
                            <td>
                                <Link to={`/comments/${items.userId}/${items.id}`}><Button text="Comments" /></Link>
                            </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="center">
                          <td>#</td>
                          <td >Data Not Found</td>
                          <td className="center_td_id">Data Not Found</td>
                          <td className="secondLast_td_posts">Data Not Found</td>
                            <td className="center_td">Data Not Found</td>
                            <td className="center_button">
                                <Link to='/'><Button text="No Comments" /></Link>
                            </td>
                          
                        </tr>
                    )
                }
              </tbody>
            </table>

          </div>

          <div className="pagination_right">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
          </div>

        </div>
      </div>
    </>
  );
};

export default Posts;
