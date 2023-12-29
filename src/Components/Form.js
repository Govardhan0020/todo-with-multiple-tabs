import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

export default function Form() {
  let navigate = useNavigate()
  const [userList, setUserList] = useState([]);
  const[flag,setFlag] = useState(true)
  const [userData, serUserData] = useState({
    fullname: '',
    emailid: '',
    password: '',
  });

  const { fullname, emailid, password } = userData;

  useEffect(() => {
    let locallist = JSON.parse(localStorage.getItem('userList'));
    console.log(locallist, 'locallist ');
    if (locallist) {
      setUserList(locallist);
    }
  }, [flag]);

  const changeHandler = (e) => {
    serUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log(userData, 'user Data ');

    if (!fullname || !emailid || !password) {
      alert('please fill the input fields ...');
    } else {
      let isNew = true;

      userList.forEach((obj) => {
        if (obj.emailid == userData.emailid) {
          return (isNew = false);
        }
      });
      console.log(isNew, 'nes ');

      if (isNew) {
        let newUser = {
          id: new Date().getTime(),
          fullname: fullname,
          emailid: emailid,
          password: password,
        };

        console.log(newUser, 'neewuser ');

        let userArr = [...userList];
        userArr.push(newUser);
        localStorage.setItem('userList', JSON.stringify(userArr));
        setUserList(userArr);
        setFlag(!flag)
        navigate("/list")
      }
    }

    serUserData({
      fullname: '',
      emailid: '',
      password: '',
    });
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
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
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
}
