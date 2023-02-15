import { useGetChatRoomsQuery } from "../queries/chatRoom.query";
import Grid from "@mui/material/Unstable_Grid2";
import { ROUTES } from "../utils/static";
import { Box, Button, Container } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ChatRoom from "../components/ChatRoom";
import { useEffect } from "react";

const ChatPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: chatRooms, refetch } = useGetChatRoomsQuery();

  useEffect(() => {
    refetch();
  }, [chatRooms]);

  return (
    <>
      <Grid
        container
        spacing={2}
        columns={16}
        style={{
          backgroundColor: "#4EAC6D",
          width: "100%",
          height: "100vh",
          margin: "0",
          padding: "1rem",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Grid xs={6} md={4} lg={4} xl={2}>
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
          <Button href={ROUTES.CREATECHATROOM}>Add Chat Room</Button>
        </Grid>
        <Grid
          xs={10}
          md={12}
          lg={12}
          xl={14}
          style={{
            backgroundColor: "#fdfdfd",
            borderRadius: "20px",
          }}
        >
          {chatRooms?.map((room) =>
            id === room._id ? <ChatRoom chatRoom={room} /> : ""
          )}
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default ChatPage;
