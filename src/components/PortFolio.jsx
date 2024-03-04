import React, { useEffect, useRef, useState } from "react";
import {
  HStack,
  VStack,
  Text,
  Image,
  Heading,
  Button,
  Link,
  chakra,
  Progress,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Input,
  Textarea,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import vikas from "../assets/dummy.png";
// import vikas from "../assets/business-man-handsome-cute-young-guy-black-suit-red-tie-smiling-with-laptop-removebg-preview.png";
import resume from "../assets/vikasResume.pdf";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
{/* <RxCross2 /> */}
const PortFolio = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ name, email, address, number, message });
    alert("Form submitted successfully");
    setName("");
    setEmail("");
    setNumber("");
    setAddress("");
    setMessage("");
  };
  const clickHandler = () => {
    onOpen()
  };
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <VStack
        width={"full"}
        bg={"#21152e"}
        fontFamily={"Poppins"}
        color={"white"}
        scrollBehavior={"smooth"}
      >
        <chakra.nav
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          position={"fixed"}
          top={0}
          zIndex={"10"}
          bgColor={"#21152e"}
        >
          <HStack>
            <Text
              color={"white"}
              _firstLetter={{ color: "cyan" }}
              letterSpacing={"1px"}
              fontSize={"32px"}
              pl={"3"}
              fontWeight={"bolder"}
            >
              Vikas.
            </Text>
          </HStack>
          <HStack verticalAlign={"center"} mt={"1"} className="mainNav" display={["none","none","block","block"]}>
            <Button
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "none", color: "cyan" }}
            >
              <Link
                href="#"
                _active={{ color: "cyan" }}
                _hover={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </Button>
            <Button
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "none", color: "cyan" }}
            >
              <Link
                href="#About"
                _active={{ color: "cyan" }}
                _hover={{ textDecoration: "none" }}
              >
                About
              </Link>
            </Button>
            <Button
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "none", color: "cyan" }}
            >
              <Link
                href="#Skills"
                _active={{ color: "cyan" }}
                _hover={{ textDecoration: "none" }}
              >
                Skills
              </Link>
            </Button>

            <Button
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "none", color: "cyan" }}
            >
              <Link
                href="#Contact"
                _active={{ color: "cyan" }}
                _hover={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </Button>
          </HStack>

          <HStack className="menuButton" display={["block","block","none","none"]}>
            <Button
              fontSize={"30px"}
              bg={"transparent"}
              color={"cyan"}
              _hover={{ bg: "cyan", color: "white" }}
              k
              onClick={clickHandler}
            >
              <IoMenu />
            </Button>
            <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent bg={"#21152e"}>
          <DrawerCloseButton  bg={"cyan"}/>

          <DrawerBody display={"flex"} mt={8} flexDir={"column"} gap={"2rem"}>
          
            <Button
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "none", color: "cyan" }}
              onClick={onClose}
            >
              <Link
                href="#"
                _active={{ color: "cyan" }}
                _hover={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </Button>
            <Button
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "none", color: "cyan" }}
              onClick={onClose}
            >
              <Link
                href="#About"
                _active={{ color: "cyan" }}
                _hover={{ textDecoration: "none" }}
              >
                About
              </Link>
            </Button>
            <Button
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "none", color: "cyan" }}
              onClick={onClose}
            >
              <Link
                href="#Skills"
                _active={{ color: "cyan" }}
                _hover={{ textDecoration: "none" }}
              >
                Skills
              </Link>
            </Button>

            <Button
              bg={"transparent"}
              color={"white"}
              _hover={{ bg: "none", color: "cyan" }}
              onClick={onClose}
            >
              <Link
                href="#Contact"
                _active={{ color: "cyan" }}
                _hover={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </Button>
         
          </DrawerBody>

        
        </DrawerContent>
      </Drawer>
          </HStack>
        </chakra.nav>

        <HStack
          width={["90%","90%","80%","80%"]}
          pl={"3"}
          flexDirection={["column", "column", "row", "row"]}
          justifyContent={[
            "space-evenly",
            "space-evenly",
            "space-between",
            "space-between",
          ]}
          mt={["8rem", "7rem", "0rem", "0rem"]}
          height={"100vh"}
        >
          <motion.div
            style={{ width: "100%", position: "relative" }}
            initial={{ opacity: 0.5, left: "-100vw" }}
            animate={{ opacity: 1, left: "0vw" }}
            transition={{ duration: 3, type: "spring" }}
          >
            <VStack width={["100%", "100", "100%"]}>
              <Heading width={"100%"} textAlign={"left"}>
                HI! I'M VIKAS KUMAR,
              </Heading>
              <Heading fontSize={"17px"} width={"100%"} textAlign={"left"}>
                <TypeAnimation
                  sequence={[
                    "A Frontend Developer",
                    "A Full Stack Developer",
                    "A UI/UX Designer",
                  ]}
                  wrapper="Text"
                  speed={{ type: "keyStrokeDelayInMs", value: 200 }}
                  style={{
                    fontSize: "1.3em",
                    display: "inline-block",
                    color: "cyan",
                  }}
                  repeat={Infinity}
                  deletionSpeed={{ type: "keyStrokeDelayInMs", value: "200" }}
                />
              </Heading>
              <Text width={"100%"} textAlign={"justify"}>
                A MERN stack developer working in tech field for 1 year so
                far.Specialised in html , css , bootstrap , chakraUI ,reactJs ,
                nodeJs , javascript and mongoDb.
              </Text>
              <Text width={"100%"}>Email : </Text>
              <Text width={"100%"} mt={"-6px"} fontSize={".9rem"}>
                vikas80046@gmail.com
              </Text>
              <HStack
                width={"100%"}
                justifyContent={"flex-start"}
                color={"cyan"}
                fontSize={"30px"}
                gap={"1.8rem"}
              >
                <Link href="https://github.com/vikas8004" target="_blank">
                  <FiGithub />
                </Link>
                <Link href="tel:+917239087850">
                  <MdOutlinePhone />
                </Link>
                <Link
                  href="https://wa.me/+917239087850/?text=Hi Vikas Chaudhary"
                  target="_blank"
                >
                  {" "}
                  <FaWhatsapp />
                </Link>
              </HStack>
              <motion.div
                style={{ width: "100%" }}
                transition={{ duration: 1, ease: "linear" }}
              >
                <Button
                  bg={"cyan"}
                  _hover={{
                    bg: "#21152e",
                    color: "cyan",
                    boxShadow: "inset 0px 0px 1px 1px cyan",
                    transition: "1s ease",
                  }}
                >
                  <a href={resume} download={"vikasResume"}>
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </VStack>
          </motion.div>
          <VStack width={"50%"}>
            <motion.div
              animate={{
                opacity: 1,
                y: [1, 0],
              }}
              transition={{
                duration: 1,
                delay: 1,
                type: "tween",
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <Image
                src={vikas}
                height={["20rem", "20rem", "20rem", "25rem"]}
              />
            </motion.div>
          </VStack>
        </HStack>
        <HStack
          width={["90%","90%","80%","80%"]}
          pl={"3"}
          flexDirection={["column-reverse", "column-reverse", "row", "row"]}
          justifyContent={[
            "space-evenly",
            "space-evenly",
            "space-between",
            "space-between",
          ]}
          height={"100vh"}
          id="About"
        >
          <VStack width={["100%", "100%", "50%", "50%"]}>
            <motion.div
              style={{ width: "100%" }}
              animate={{
                opacity: 1,
                y: [1, 0],
              }}
              transition={{
                duration: 1,
                delay: 1,
                type: "tween",
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <Image
                src={vikas}
                height={["20rem", "20rem", "20rem", "25rem"]}
                mx={["auto", "auto", "", ""]}
              />
            </motion.div>
          </VStack>
          <motion.div
            style={{ position: "relative", width: "100%" }}
            initial={{
              opacity: 1,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,

              scaleX: 1,
            }}
            transition={{
              duration: 2,
              damping: 10,
              stiffness: 100,
            }}
            viewport={{ once: false }}
          >
            <VStack width={["100%"]} justifyContent={"flex-start"}>
              <Heading width={["100%"]} textAlign={"left"} color={"cyan"}>
                About Me
              </Heading>
              <Text fontWeight={"bolder"} width={["100%"]} textAlign={"left"}>
                A Story Of Good
              </Text>
              <Text
                noOfLines={["8", "5", "9"]}
                textAlign={"justify"}
                width={"100%"}
              >
                Hi there, I'm <span style={{ color: "cyan" }}>Vikas Kumar</span>
                , a software engineer with 1 years of experience crafting
                digital solutions. From designing intuitive user interfaces to
                architecting scalable backend systems, I thrive on the dynamic
                challenges of software development. Passionate about leveraging
                cutting-edge technologies like ReactJS , MongoDb , Javascript ,
                NodeJS , I'm driven by the opportunity to create innovative
                solutions that make a meaningful impact. Whether it's optimizing
                code performance or collaborating with cross-functional teams,
                I'm dedicated to delivering high-quality software that exceeds
                expectations. I'm excited to connect with like-minded
                professionals and continue pushing the boundaries of what's
                possible in the world of technology.
              </Text>
              <motion.div
                style={{ width: "100%" }}
                transition={{ duration: 1, ease: "linear" }}
              >
                <Button
                  bg={"cyan"}
                  _hover={{
                    bg: "#21152e",
                    color: "cyan",
                    boxShadow: "inset 0px 0px 1px 1px cyan",
                    transition: "1s ease",
                  }}
                >
                  <Button
                    bg={"transparent"}
                    _hover={{ bg: "transparent", color: "inherit" }}
                  >
                    Read More
                  </Button>
                </Button>
              </motion.div>
            </VStack>
          </motion.div>
        </HStack>
        <HStack
          width={["90%","90%","80%","80%"]}
          pl={"3"}
          flexDirection={["column-reverse", "column-reverse", "row", "row"]}
          justifyContent={[
            "space-evenly",
            "space-evenly",
            "space-between",
            "space-between",
          ]}
          minHeight={"100vh"}
          mt={["0px", "2rem", "0", "0"]}
          id="Skills"
        >
          <motion.div
            style={{ width: "100%" }}
            initial={{
              opacity: ".5",
              scale: 0,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
              damping: 50,
              stiffness: 100,
            }}
            viewport={{ once: false }}
          >
            <HStack width={"100%"} mb={["0rem","0","2rem"]}>
              <Heading width={"100%"} color={"cyan"} textAlign={"center"}>
                My Skills
              </Heading>
            </HStack>
            <HStack
              width={"100%"}
              flexDirection={["column", "column", "row", "row"]}
              justifyContent={[
                "space-evenly",
                "space-evenly",
                "space-between",
                "space-between",
              ]}
            >
              <VStack width={["100%", "100%", "60%", "60%"]} >
                <Heading
                  width={"100%"}
                  textAlign={"center"}
                  fontSize={"20px"}
                  mt={["10px", "10px", 0, 0]}
                >
                  Technincal Skills
                </Heading>
                <HStack width={"100%"} justifyContent={"space-between"}>
                  <Text>HTML</Text>
                  <Text>90%</Text>
                </HStack>
                <Progress
                  value={90}
                  colorScheme="cyan"
                  width={"100%"}
                  size={"sm"}
                  isAnimated={true}
                />
                <HStack width={"100%"} justifyContent={"space-between"}>
                  <Text>CSS</Text>
                  <Text>70%</Text>
                </HStack>
                <Progress
                  value={70}
                  colorScheme="cyan"
                  width={"100%"}
                  size={"sm"}
                  isAnimated={true}
                />
                <HStack width={"100%"} justifyContent={"space-between"}>
                  <Text>Javascript</Text>
                  <Text>65%</Text>
                </HStack>
                <Progress
                  value={65}
                  colorScheme="cyan"
                  width={"100%"}
                  size={"sm"}
                  isAnimated={true}
                />
                <HStack width={"100%"} justifyContent={"space-between"}>
                  <Text>Chakra UI</Text>
                  <Text>75%</Text>
                </HStack>
                <Progress
                  value={75}
                  colorScheme="cyan"
                  width={"100%"}
                  size={"sm"}
                  isAnimated={true}
                />
                <HStack width={"100%"} justifyContent={"space-between"}>
                  <Text>Node js</Text>
                  <Text>50%</Text>
                </HStack>
                <Progress
                  value={50}
                  colorScheme="cyan"
                  width={"100%"}
                  size={"sm"}
                  isAnimated={true}
                />
                <HStack width={"100%"} justifyContent={"space-between"}>
                  <Text>Mongo DB</Text>
                  <Text>80%</Text>
                </HStack>
                <Progress
                  value={80}
                  colorScheme="cyan"
                  width={"100%"}
                  size={"sm"}
                  isAnimated={true}
                  variant={"outline"}
                />
              </VStack>
              <VStack width={["100%", "100%", "30%", "30%"]} height={"300px"}>
                <Heading width={"100%"} textAlign={"center"} fontSize={"20px"}>
                  Professional Skills
                </Heading>
                <HStack
                  width={"100%"}
                  justifyContent={"space-between"}
                  height={"100%"}
                >
                  <VStack width={"50%"}>
                    <CircularProgress value={60} color="cyan" size={"60px"}>
                      <CircularProgressLabel>60%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>Team Work</Text>
                  </VStack>
                  <VStack width={"50%"}>
                    <CircularProgress value={70} color="cyan" size={"60px"}>
                      <CircularProgressLabel>70%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>Creativity</Text>
                  </VStack>
                </HStack>
                <HStack
                  width={"100%"}
                  justifyContent={"space-between"}
                  height={"100%"}
                >
                  <VStack width={"50%"}>
                    <CircularProgress value={60} color="cyan" size={"60px"}>
                      <CircularProgressLabel>60%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>Mangagement</Text>
                  </VStack>
                  <VStack width={"50%"}>
                    <CircularProgress value={70} color="cyan" size={"60px"}>
                      <CircularProgressLabel>70%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>Communication</Text>
                  </VStack>
                </HStack>
              </VStack>
            </HStack>
          </motion.div>
        </HStack>

        <HStack
          width={["90%","90%","80%","80%"]}
          pl={"3"}
          flexDirection={["column"]}
          justifyContent={["center"]}
          minHeight={"100vh"}
          mt={["-40px", "2rem", "0", "0"]}
          id="Contact"
          overflow={"hidden"}
        >
          <motion.div
            style={{ width: "100%" }}
            initial={{
              opacity: "0",
              y: 200,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            viewport={{ once: false }}
          >
            <Heading width={"100%"} color={"cyan"} textAlign={"center"}>
              {" "}
              Contact Me
            </Heading>
            <form>
              <HStack
                width={["100%", "80%", "70%"]}
                mt={"1.3rem"}
                flexDirection={"column"}
                gap={"1rem"}
                mx={"auto"}
              >
                <Input
                  outline={"none"}
                  focusBorderColor="white"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  outline={"none"}
                  focusBorderColor="white"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  outline={"none"}
                  focusBorderColor="white"
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  type="number"
                  outline={"none"}
                  focusBorderColor="white"
                  placeholder="Your Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <Textarea
                  outline={"none"}
                  focusBorderColor="white"
                  placeholder="Your Messages"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={7}
                />
                <motion.div
                  style={{ width: "100%" }}
                  transition={{ duration: 1, ease: "linear" }}
                >
                  <Button
                    bg={"cyan"}
                    _hover={{
                      bg: "#21152e",
                      color: "cyan",
                      boxShadow: "inset 0px 0px 1px 1px cyan",
                      transition: "1s ease",
                    }}
                    type="submit"
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                </motion.div>
              </HStack>
            </form>
          </motion.div>
        </HStack>
        <HStack p={1}>
          <Text>© Copyright 2024, Vikas Kumar . All Right Reserved</Text>
        </HStack>
      </VStack>
    </>
  );
};

export default PortFolio;
