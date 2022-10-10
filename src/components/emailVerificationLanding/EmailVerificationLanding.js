import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../hooks/useToken";
import EmailVerificationSuccess from "../emailVerificationSuccess/EmailVerificationSuccess";
import EmailVerificationFail from "../emailVerfificationFail/EmailVerificationFail";
import { BASE_URL } from "../../config/axios";

const EmailVerificationLanding = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [, setToken] = useToken();
  const { verificationString } = useParams();
  useEffect(() => {
    const verifyEmail = async function () {
      try {
        const response = await axios.put(`${BASE_URL}/api/verify-email`, {
          verificationString,
        });
        const { token } = response.data;
        setToken(token);
        setIsLoading(false);
        setIsSuccess(true);
      } catch (e) {
        setIsLoading(false);
        setIsSuccess(false);
      }
    };
    verifyEmail();
  }, [setToken, verificationString]);
  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <EmailVerificationFail />;
  return <EmailVerificationSuccess />;
};

export default EmailVerificationLanding;
