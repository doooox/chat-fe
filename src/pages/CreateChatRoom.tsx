import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuthGuard from "../hooks/useAuthGuard";
import { chatRoomService } from "../services/ChatRoom/chatRoomService";
import { IChatRoomDraft } from "../types/chatRoom.types";
import { ROUTES } from "../utils/static";

const CreateChatRoom = () => {
  useAuthGuard();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChatRoomDraft>();

  const { mutate: create } = useMutation(chatRoomService.createCHatRoom, {
    onSuccess: () => {
      navigate(ROUTES.MAIN);
    },
  });
  const onSubmit: SubmitHandler<IChatRoomDraft> = (data) => {
    create(data);
    navigate(ROUTES.MAIN);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 4, width: "100%" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Create new chat room</h1>
      <TextField
        style={{ width: "25%" }}
        margin="normal"
        required
        label="Chat Room Name"
        {...register("name", {
          required: "Chat room name is requiered",
        })}
      />
      {errors.name && (
        <Stack sx={{ width: "25%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            {errors.name?.message}
          </Alert>
        </Stack>
      )}
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        style={{ background: "#4EAC6D", width: "25%" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CreateChatRoom;
