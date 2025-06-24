import React, { useState } from "react";
import {
  ViewIcon, ViewOffIcon
} from "@chakra-ui/icons";
import {
  Center, Heading, InputGroup, InputLeftAddon, useDisclosure,
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
  Button, Box, Input, InputRightElement, Text
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "", lastName: "", phone: "", email: "", password: ""
  });
  const { setisAuth, setAuthData } = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [emailForOtp, setEmailForOtp] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validateField = (name, value) => {
    let message = "";
    switch (name) {
      case "firstName":
        if (!value) message = "This is a required field";
        break;
      case "phone":
        if (!value) message = "This is a required field";
        else if (!/^[0-9]{10}$/.test(value)) message = "Enter valid 10-digit phone";
        break;
      case "email":
        if (!value) message = "This is a required field";
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) message = "Invalid email";
        break;
      case "password":
        if (!value) message = "This is a required field";
        else if (value.length < 8) message = "Password must be at least 8 characters";
        break;
      default:
        break;
    }
    return message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleRegister = async () => {
    const newErrors = {};
    Object.entries(userData).forEach(([name, value]) => {
      const err = validateField(name, value);
      if (err) newErrors[name] = err;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const payload = {
      name: `${userData.firstName}`,
      email: userData.email,
      phone: userData.phone,
      password: userData.password
    };

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/registerTest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.status === 200) {
        setEmailForOtp(userData.email);
        setOtpSent(true); // open OTP entry
        onClose(); // close registration modal
      } else if (res.status === 409) {
        setErrors((prev) => ({ ...prev, email: "Email or phone already registered" }));
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      return alert("Please enter email and password");
    }
    try {
      const res = await fetch("http://localhost:8000/api/auth/login/email/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(loginData)
      });

      const data = await res.json();
      if (res.ok) {
        setAuthData({ firstName: data.firstName });
        setisAuth(true);          // Mark user as logged in
        onClose();                // Close modal
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Server error");
    }
  }

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter OTP");

    try {
      const res = await fetch("http://localhost:8000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailForOtp, otp })
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Account verified successfully!");
        setOtpSent(false);
        onOpen(); // Reopen modal for login
        setShowLoginForm(true);
        setLoginData({ email: emailForOtp, password: userData.password });
      } else {
        alert(data.message || "OTP verification failed");
      }
    } catch (err) {
      alert("Server error during OTP verification");
    }
  };

  return (
    <>
      <Center onClick={onOpen} fontWeight="400" fontSize="15px" w="60px">Sign Up</Center>

      {/* Sign Up + Login Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent pt="5" rounded="3xl">
          <ModalCloseButton />
          <ModalBody p="0px">
            {!showLoginForm ? (
              <Box m="5px 45px 20px 45px">
                <Heading fontSize="26px" mb="20px" color="#333368">Create an Account</Heading>

                <Input name="firstName" placeholder="First Name*" onChange={handleChange} rounded="2xl" />
                <Text color="red.500" fontSize="sm">{errors.firstName}</Text>

                <Input name="lastName" placeholder="Last Name (optional)" onChange={handleChange} mt="10px" rounded="2xl" />

                <InputGroup mt="10px">
                  <InputLeftAddon children="+91" />
                  <Input name="phone" type="number" placeholder="Mobile*" onChange={handleChange} rounded="2xl" />
                </InputGroup>
                <Text color="red.500" fontSize="sm">{errors.phone}</Text>

                <Input name="email" type="email" placeholder="Email*" onChange={handleChange} mt="10px" rounded="2xl" />
                <Text color="red.500" fontSize="sm">{errors.email}</Text>

                <InputGroup mt="10px">
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    onChange={handleChange}
                    rounded="2xl"
                  />
                  <InputRightElement>
                    <Button size="sm" onClick={() => setShowPassword(!showPassword)} bg="white">
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text color="red.500" fontSize="sm">{errors.password}</Text>

                <Button
                  mt="20px"
                  isLoading={loading}
                  onClick={handleRegister}
                  bgColor="#11daac"
                  width="100%"
                  borderRadius="35px"
                  h="50px"
                  color="white"
                  fontWeight="bold"
                >
                  Create an Account
                </Button>

                <Center mt="4" fontSize="15px">
                  Already have an account?{" "}
                  <Text
                    as="span"
                    ml="1"
                    color="blue.500"
                    fontWeight="bold"
                    cursor="pointer"
                    onClick={() => setShowLoginForm(true)}
                  >
                    Login
                  </Text>
                </Center>
              </Box>
            ) : (
              <Box m="5px 45px 20px 45px">
                <Heading fontSize="26px" mb="20px" color="#333368">Sign In</Heading>

                <Input
                  name="loginEmail"
                  type="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  mb="12px"
                  rounded="2xl"
                />

                <InputGroup>
                  <Input
                    name="loginPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    rounded="2xl"
                  />
                  <InputRightElement>
                    <Button size="sm" onClick={() => setShowPassword(!showPassword)} bg="white">
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Button
                  mt="5"
                  bgColor="#11daac"
                  width="100%"
                  borderRadius="35px"
                  h="50px"
                  color="white"
                  fontWeight="bold"
                  onClick={handleLogin}
                >
                  Login
                </Button>

                <Center mt="4" fontSize="15px">
                  Don’t have an account?{" "}
                  <Text
                    as="span"
                    ml="1"
                    color="blue.500"
                    fontWeight="bold"
                    cursor="pointer"
                    onClick={() => setShowLoginForm(false)}
                  >
                    Sign Up
                  </Text>
                </Center>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* OTP Modal */}
      <Modal isOpen={otpSent} onClose={() => setOtpSent(false)} isCentered size="sm">
        <ModalOverlay />
        <ModalContent rounded="xl" py="8" px="6">
          <ModalCloseButton />
          <Heading fontSize="lg" textAlign="center">Verify OTP</Heading>
          <Text fontSize="sm" textAlign="center" mt="2" color="gray.600">
            We have sent a 6-digit OTP to <b>{emailForOtp}</b>
          </Text>
          <Input
            mt="4"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
            maxLength={6}
            textAlign="center"
            fontSize="xl"
            letterSpacing="5px"
          />
          <Button mt="4" width="100%" colorScheme="teal" onClick={handleVerifyOtp}>
            Verify
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
