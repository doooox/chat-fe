import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { messageService } from "../services/ChatRoom/messageService";
import { ICreateMessage } from "../types/message.types";
import SendIcon from "@mui/icons-material/Send";
import { useGetMessagesQuery } from "../queries/message.query";
import { emmitEvent, getSocket } from "../services/SocketService";
import { getItemFormStorage } from "../utils/storage";

const CreateMessageComponent = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateMessage>();
  const { refetch } = useGetMessagesQuery(id || "");
  const { mutate: create } = useMutation(messageService.createMessage, {
    onSuccess: () => {
      reset();
      refetch();
      emmitEvent("message-added", "chat-message-room");
    },
  });

  const onSubmitHandler = (data: ICreateMessage) => {
    const user = getItemFormStorage("user");

    if (!id) return;
    const payload: ICreateMessage = {
      text: data.text,
      chatRoom: id,
      user: user.id,
    };
    create(payload);
  };

  getSocket().on("message-added", () => {
    refetch();
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="Your message"
          fullWidth
          autoFocus
          {...register("text", {
            required: "Message must contain text",
            maxLength: {
              value: 500,
              message: "Message can't have more than 500 characters",
            },
          })}
        />
        <Button
          type="submit"
          variant="contained"
          style={{
            borderRadius: "50%",
            padding: "1rem",
            margin: "0.3rem",
          }}
        >
          <SendIcon style={{ fontSize: "1rem" }} />
        </Button>
      </Box>
      {errors.text && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            {errors.text?.message}
          </Alert>
        </Stack>
      )}
    </>
  );
};

export default CreateMessageComponent;
