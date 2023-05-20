import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Comments = () => {


  const params = useParams();

  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  function firstTimeFetchDataUser() {
    const url = `https://jsonplaceholder.typicode.com/users?id=${params.userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }

  function firstTimeFetchDataComments() {
    const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    firstTimeFetchDataUser();
    firstTimeFetchDataComments();
  }, []);



  return (
    <>
      <div className="userDataShow">
        
        {userData.map((items) => (
          <div className="bottom_part">
            <div className="one sameDiv">
                <p>Name</p>
                <FontAwesomeIcon icon={faAnglesDown} />
                <p>{items.name}</p>
            </div>
            <div className="two sameDiv">
                <p>Email</p>
                <FontAwesomeIcon icon={faAnglesDown} />
                <p>{items.email}</p>
            </div>
            <div className="three sameDiv">
                <p>Address</p>
                <FontAwesomeIcon icon={faAnglesDown} />
                <p>{items.address.street}, {items.address.suite}, {items.address.city}</p>
            </div>
            <div className="four sameDiv">
                <p>Phone</p>
                <FontAwesomeIcon icon={faAnglesDown} />
                <p>{items.phone}</p>
            </div>
            <div className="five sameDiv">
                <p>Website</p>
                <FontAwesomeIcon icon={faAnglesDown} />
                <p>{items.website}</p>
            </div>
            <div className="six sameDiv">
                <p>Company Name</p>
                <FontAwesomeIcon icon={faAnglesDown} />
                <p>{items.company.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="tableContainer">
        <div className="tableContainer_Center">
          <div className="mainTableHeading">
            <p>Comments</p>
          </div>

          <div className="table_box forBottom_margin">
            <div className="tableWrapper">
              <table>
                <thead>
                  <tr>
                    <th>
                      S.No <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>
                      Post Id <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>
                      Id <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>
                      Name <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>
                      Email <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>
                      Body <FontAwesomeIcon icon={faSort} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length !== 0 ? (
                    data.map((items, index) => (
                      <tr key={index}>
                        <td className="first_td_comments">{index + 1}</td>
                        <td className="second_td_comments">{items.postId}</td>
                        <td className="third_td_comments">{items.id}</td>
                        <td className="thirdLast_td_comments">{items.name}</td>
                        <td className="secondLast_td_comments">{items.email}</td>
                        <td className="last_td_comments">{items.body}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="center">
                      <td style={{ textAlign: "center" }}>Data Not Found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
