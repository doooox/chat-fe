import { useGetChatRoomsQuery } from "../queries/chatRoom.query";
import Grid from "@mui/material/Unstable_Grid2";
import { ROUTES } from "../utils/static";
import { Box, Button, Container } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ChatRoom from "../components/ChatRoom";
import { useContext, useEffect } from "react";
import MessagesComponent from "../components/MessagesComponent";
import CreateMessageComponent from "../components/CreateMessageComponent";
import useAuthGuard from "../hooks/useAuthGuard";
import { UserContext } from "../context/UserContext";

const ChatPage = () => {
  useAuthGuard();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);

  const { id } = useParams();
  const { data: chatRooms, refetch } = useGetChatRoomsQuery();

  useEffect(() => {
    refetch();
  }, [chatRooms, refetch]);

  return (
    <>
      <Grid
        container
        spacing={2}
        columns={16}
        style={{
          backgroundColor: "#037baa",
          width: "100%",
          height: "100vh",
          margin: "0",
          padding: "1rem",
          overflow: "hidden",
        }}
      >
        <Grid
          xs={6}
          md={4}
          lg={4}
          xl={2}
          style={{ height: "90vh", overflow: "scroll" }}
        >
          <Button>Singout</Button>
          <h1>Chat Rooms</h1>
          {chatRooms?.map((room) => (
            <Box
              key={room._id}
              sx={{ m: 1 }}
              style={{
                backgroundColor: "white",
                padding: "0.3rem",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <Button
                style={{
                  fontSize: "0.8rem",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`${ROUTES.CHATROOM.replace(":id", room._id || "")}`);
                }}
              >
                {room.name}
              </Button>
            </Box>
          ))}
          {user?.isAdmin ? (
            <Button
              href={ROUTES.CREATECHATROOM}
              style={{ color: "whitesmoke" }}
            >
              Add Chat Room
            </Button>
          ) : (
            ""
          )}
        </Grid>
        <Grid
          xs={10}
          md={12}
          lg={12}
          xl={14}
          style={{
            backgroundColor: "#cecdcd",
            borderRadius: "20px",
          }}
        >
          {chatRooms?.map((room) =>
            id === room._id ? <ChatRoom chatRoom={room} key={room._id} /> : ""
          )}
          <Grid>
            <MessagesComponent />
          </Grid>
          <Grid>
            <CreateMessageComponent />
          </Grid>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default ChatPage;
