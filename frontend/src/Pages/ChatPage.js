import React, { useEffect, useState } from "react";
import axios from "axios";
const Chat = () => {
  const [user, setUser] = useState();
  console.log({ user });
  const fetchChats = async () => {
    const response = await axios.get("/api/chat");
    console.log({ response });
    setUser(response?.data);
  };
  useEffect(() => {
    console.log("inside out yaar");
    fetchChats();
  }, []);

  return (
    <div>
      {user &&
        user.map((item, i) => {
          return <li key={i}>{item?.name}</li>;
        })}
    </div>
  );
};

export default Chat;
