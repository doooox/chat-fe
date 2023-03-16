import * as React from "react";
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
import ChatIcon from "@mui/icons-material/Chat";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/Auth/AuthService";
import { Alert, Stack } from "@mui/material";
import ISingin from "../types/singin.types";

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISingin>();

  const { singin } = useContext(UserContext);

  const { mutate: singInUser } = useMutation(authService.singin, {
    onSuccess: (data) => {
      singin(data);
    },
  });

  const onSubmit: SubmitHandler<ISingin> = (data) => {
    singInUser(data);
  };
  return (
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 4, width: "100%" }}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#037baa" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href={ROUTES.SINGUP} variant="body2">
                    {"Don't have an account? Sign Up"}
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
