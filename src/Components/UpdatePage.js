import React, { useState, useEffect } from 'react';

export default function UpdatePage() {
  const [userList, setUserList] = useState([]);
  const [flag, setFlag] = useState(true);
  const [hideForm, setHideForm] = useState(false);
  const [hideTable, setHideTable] = useState(true);
  const [editId, setEditEd] = useState(null);

  const [userData, serUserData] = useState({
    fullname: '',
    emailid: '',
    password: '',
  });

  const { fullname, emailid, password } = userData;

  useEffect(() => {
    let locallist = JSON.parse(localStorage.getItem('userList'));
    console.log(locallist, '99 ');
    if (locallist) {
      setUserList(locallist);
    }
  }, [flag]);

  const changeHandler = (e) => {
    serUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const editHandler = (getid) => {
    console.log(getid, 'id ');
    let editingItem = userList.find((item) => item.id === getid);
    console.log(editingItem, 'edit item ');
    setEditEd(getid);
    setHideForm(true);
    setHideTable(false);
    serUserData({
      fullname: editingItem.fullname,
      emailid: editingItem.emailid,
      password: editHandler.password,
    });
  };

  const handlerUpdate = (e) => {
    let editeditem = userList.map((item) => {
      if (item.id == editId) {
        return {
          ...userData,
          fullname: fullname,
          emailid: emailid,
          password: password,
        };
      }
      return userData;
    });

    console.log(editeditem, 'after edit ');
    localStorage.setItem('userList', JSON.stringify(editeditem));
    setUserList(editeditem);
    setFlag(!flag);
    setEditEd(null);
    setHideForm(false);
    setHideTable(true);
  };

  return (
    <div>
      <h4> Update Page </h4>

      {hideForm && (
        <form onSubmit={handlerUpdate}>
          <h4> Form </h4>
          <div>
            <label> Full name : </label>
            <input
              type="text"
              placeholder="enter your naem "
              name="fullname"
              value={fullname}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label> Email Id : </label>
            <input
              type="text"
              placeholder="enter your email id "
              name="emailid"
              value={emailid}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label> Password : </label>
            <input
              type="password"
              placeholder="enter your naem "
              name="password"
              value={password}
              onChange={changeHandler}
            />
          </div>
          <div>
            <button type="submit"> Update </button>
          </div>
        </form>
      )}

      <div>
        {hideTable && userList.length > 0 && (
          <table>
            <tbody>
              <tr>
                <th> S.no </th>
                <th> Full Name </th>
                <th> Email id </th>
                <th> Edit Item </th>
              </tr>
              {userList.map((item, ind) => (
                <tr key={item.id}>
                  <td> {ind + 1} </td>
                  <td> {item.fullname} </td>
                  <td> {item.emailid} </td>
                  <td>
                    {' '}
                    <button onClick={() => editHandler(item.id)}>
                      {' '}
                      Edit{' '}
                    </button>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
