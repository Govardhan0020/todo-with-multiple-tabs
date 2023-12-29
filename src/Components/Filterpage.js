import React, { useState, useEffect } from 'react';

export default function Filterpage() {
  const [userList, setUserList] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    let locallist = JSON.parse(localStorage.getItem('userList'));
    console.log(locallist, 'locallist ');
    if (locallist) {
      setUserList(locallist);
    }
  }, []);

  const searchData = (e) => {
    // console.log(e.target.value, "val ")
    setSearchString(e.target.value);
  };

  let filtered = userList.filter((item) =>
    item.emailid.toLowerCase().includes(searchString.toLowerCase())
  );

  console.log(filtered, 'filted');

  return (
    <div>
      <p>
        {' '}
        <b> Filter </b>{' '}
      </p>
      {userList && userList.length > 0 && (
        <>
          <div className="search">
            <label> search : </label>
            <input type="text" onChange={searchData} />
          </div>
          {filtered && filtered.length > 0 ? (
            <>
              <table>
                <tbody>
                  <tr>
                    <th> S.no </th>
                    <th> Full Name </th>
                    <th> Email id </th>
                  </tr>
                  {filtered.map((item,ind) => (
                    <tr key={item.id}>
                      <td> {ind + 1} </td>
                      <td> {item.fullname} </td>
                      <td> {item.emailid} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <h3> Not Found ! </h3>
          )}
        </>
      )}
    </div>
  );
}
