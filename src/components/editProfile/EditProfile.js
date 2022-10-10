import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";
import Card from "../card/Card";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../../config/axios";
const Profile = function () {
  const [token, setToken] = useToken();
  const user = useUser();
  const { id, email, isVerified, info } = user;
  const [firstNameValue, setFirstNameValue] = useState(info.firstName || "");
  const [lastNameValue, setLastNameValue] = useState(info.lastName || "");
  const [bioValue, setBioValue] = useState(info.bio || "");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isVerified) {
      toast.error(
        "You won't be able to make any changes until verify your email",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
  }, []);

  const saveChangesHandler = async function () {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/users/${id}`,
        {
          firstName: firstNameValue,
          lastName: lastNameValue,
          bio: bioValue,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const { token: newToken } = response.data;
      setToken(newToken);
      toast.success("Profile saved successfully!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      toast.error(`${err.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const signOut = function () {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Grid
        item
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card title={`Update Profile of ${email}`}>
          <Grid item className="mb">
            <TextField
              fullWidth
              onChange={(e) => setFirstNameValue(e.target.value)}
              value={firstNameValue}
              label="First Name"
              type="text"
              name="firstName"
            />
          </Grid>
          <Grid item className="mb">
            <TextField
              fullWidth
              onChange={(e) => setLastNameValue(e.target.value)}
              value={lastNameValue}
              label="Last Name"
              type="text"
              variant="outlined"
              name="lastName"
            />
          </Grid>

          <Grid item className="mb">
            <TextField
              fullWidth
              onChange={(e) => setBioValue(e.target.value)}
              value={bioValue}
              label="Biography"
              type="text"
              variant="outlined"
              multiline
              maxRows={4}
              name="bio"
            />
          </Grid>

          <Grid item className="mb">
            <Button
              fullWidth
              onClick={() => saveChangesHandler()}
              size="large"
              variant="contained"
            >
              Save Changes
            </Button>
          </Grid>
          <Grid item className="mb">
            <Button
              size="large"
              variant="outlined"
              fullWidth
              color="error"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default Profile;
