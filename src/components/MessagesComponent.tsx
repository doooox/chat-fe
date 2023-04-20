import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../queries/message.query";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useContext, useEffect } from "react";
import { Grid } from "@mui/material";
import { UserContext } from "../context/UserContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MessagesComponent = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { data: messages, refetch } = useGetMessagesQuery(id || "");

  useEffect(() => {
    refetch();
  }, [id, refetch, messages]);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/original/02.jpg?3)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "1.2rem",
        height: "66vh",
        overflow: "scroll",
      }}
    >
      {messages?.map((message) =>
        id === message.chatRoom && message.user ? (
          user?.username === message.user.username ? (
            <div
              key={message._id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Item
                style={{
                  backgroundColor: "#a6d9f186",
                  color: "#3a3a3a",
                  padding: "1rem",
                  width: "60%",
                }}
              >
                <Grid style={{ textAlign: "start" }}>{message.text}</Grid>
              </Item>
              <small style={{ marginBottom: "0.5rem", color: "white" }}>
                You
              </small>
            </div>
          ) : (
            <div
              key={message._id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Item
                style={{
                  backgroundColor: "#7bc26971",
                  color: "white",
                  display: "flex",
                  alignItems: "flex-end",
                  width: "60%",
                  padding: "0.5rem",
                }}
              >
                <Grid style={{ textAlign: "start" }}>{message.text}</Grid>
              </Item>
              <small style={{ color: "whitesmoke" }}>
                {message.user.username}
              </small>
            </div>
          )
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default MessagesComponent;
