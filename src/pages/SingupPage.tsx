import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ROUTES } from "../utils/static";
import { SubmitHandler, useForm } from "react-hook-form";
import ISingup from "../types/singup.types";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/Auth/AuthService";
import { Alert, Stack } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export default function SingupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISingup>();

  const { singin } = useContext(UserContext);

  const { mutate: singup } = useMutation(authService.singup, {
    onSuccess: (data) => {
      singin(data);
    },
  });

  const onSubmit: SubmitHandler<ISingup> = (data) => {
    singup(data);
  };

  return (
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
      }}
    >
      <Grid item={true} xs={1} md={6} lg={6} xl={6}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 6 }}>
          <Box style={{ color: "white", fontSize: "2rem" }}>
            Chat App
            <ChatIcon
              sx={{ m: 0.5 }}
              style={{ color: "white", fontSize: "2.2rem" }}
            />
          </Box>
        </Typography>
      </Grid>
      <Grid
        item={true}
        xs={14}
        md={10}
        lg={10}
        xl={10}
        style={{ backgroundColor: "#fdfdfd", borderRadius: "20px" }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "success.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoFocus
                {...register("email", {
                  required: "Email is requiered",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Not a valid email",
                  },
                })}
              />
              {errors.email && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert variant="filled" severity="error">
                    {errors.email?.message}
                  </Alert>
                </Stack>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                autoFocus
                {...register("username", { required: "Username is requiered" })}
              />
              {errors.username && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert variant="filled" severity="error">
                    {errors.username?.message}
                  </Alert>
                </Stack>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password is requiered",
                  minLength: {
                    value: 6,
                    message: "password must contain at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert variant="filled" severity="error">
                    {errors.password?.message}
                  </Alert>
                </Stack>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                {...register("confirmPassword", {
                  required: "Password confirmation is requiered",
                  validate: (val: string) => {
                    return watch("password") !== val
                      ? "Passwords dont match"
                      : true;
                  },
                })}
              />
              {errors.confirmPassword && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert variant="filled" severity="error">
                    {errors.confirmPassword?.message}
                  </Alert>
                </Stack>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ background: "#4EAC6D" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href={ROUTES.SINGIN} variant="body2">
                    {"You have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
