import React, { useState, useEffect } from 'react';

export default function Listpage() {
  const [userList, setUserList] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    let locallist = JSON.parse(localStorage.getItem('userList'));
    console.log(locallist, '99 ');
    if (locallist) {
      setUserList(locallist);
    }
  }, [flag]);

  const deleteHandler = (getid) => {
    console.log(getid, 'id ');
    let afterDelete = userList.filter((item) => item.id !== getid);
    console.log(afterDelete, 'after del ');
    localStorage.setItem('userList', JSON.stringify(afterDelete));
    setFlag(!flag);
  };

  return (
    <div>
      {userList && userList.length > 0 && (
        <table>
             <tbody>
            <tr>
              <th> S.no </th>
              <th> Full Name </th>
              <th> Email id </th>
              <th> Delete Item </th>
            </tr>
      
            {userList.map((item,ind) => (
              <tr key={item.id}>
                <td> {ind + 1} </td>
                <td> {item.fullname} </td>
                <td> {item.emailid} </td>
                <td>
                  {' '}
                  <button onClick={() => deleteHandler(item.id)}>
                    {' '}
                    Delete{' '}
                  </button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
