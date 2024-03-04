import React from "react";
import { HStack, VStack, Text, Heading, Divider } from "@chakra-ui/react";
const VikasResume = () => {
  return (
    <VStack
      width={"full"}
      alignItems={"flex-start"}
      p={3}
      fontFamily={"Roboto"}
    >
      <HStack flexDirection={"column"} justifyContent={"flex-start"}>
        <Heading width={"100%"} letterSpacing={"2px"}>
          VIKAS KUMAR
        </Heading>
        <Text textAlign={"left"} width={"100%"} mt={"-7px"}>
          (+91)7239087850
        </Text>
        <Text textAlign={"left"} width={"100%"} mt={"-7px"}>
          vikas800046@gmail.com
        </Text>
        <Text textAlign={"left"} width={"100%"} mt={"-7px"}>
          Block-B, New Ashok Nagar, Delhi-110096
        </Text>
      </HStack>
      <Divider width={"100%"} height={"1px"} bg={"black"} />
      <HStack flexDirection={"column"} justifyContent={"flex-start"}>
        <Heading width={"100%"} letterSpacing={"2px"} fontSize={"15px"}>
          CAREER OBJECTIVE
        </Heading>
        <Text textAlign={"justify"} width={"100%"}>
          I would like to work in an organisation that will give me a platform
          to utilize my technical skills and enrich my expertise in the process
          of growing the organization and myself with good initiatives.
        </Text>
      </HStack>
      <Divider width={"100%"} height={"1px"} bg={"black"} />
      <HStack
        flexDirection={"column"}
        justifyContent={"flex-start"}
        width={"100%"}
      >
        <Heading
          width={"100%"}
          fontSize={"17px"}
          fontWeight={"700"}
          letterSpacing={"2px"}
        >
          EDUCATION
        </Heading>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Heading width={"80%"} fontSize={"15px"} fontWeight={"700"}>
            Bachlor of Computer Application
          </Heading>
          <Heading width={"10%"} fontSize={"15px"} fontWeight={"700"}>
            2024
          </Heading>
        </HStack>
        <Text textAlign={"left"} width={"100%"} mt={"-7px"}>
          KS Saket PG College Ayodhya Faizabad
        </Text>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Heading width={"80%"} fontSize={"15px"} fontWeight={"700"}>
            Intermediate
          </Heading>
          <Heading width={"10%"} fontSize={"15px"} fontWeight={"700"}>
            2020
          </Heading>
        </HStack>
        <Text textAlign={"left"} width={"100%"} mt={"-7px"}>
          Shri Ram public School Civil-Lines Basti UP - 272001
        </Text>
        <HStack width={"100%"} justifyContent={"space-between"}>
          <Heading width={"80%"} fontSize={"15px"} fontWeight={"700"}>
            High School
          </Heading>
          <Heading width={"10%"} fontSize={"15px"} fontWeight={"700"}>
            2018
          </Heading>
        </HStack>
        <Text textAlign={"left"} width={"100%"} mt={"-7px"}>
          Shri Ram public School Civil-Lines Basti UP - 272001
        </Text>
      </HStack>
      <Divider width={"100%"} height={"1px"} bg={"black"} />
      <HStack flexDirection={"column"} justifyContent={"flex-start"}>
        <Heading width={"100%"} letterSpacing={"2px"} fontSize={"15px"}>
          SKILLS
        </Heading>
        <Text width={"100%"} letterSpacing={"1px"}>
          <span style={{ fontWeight: "600" }}>Technology</span> : MERN{" "}
        </Text>{" "}
        <Text width={"100%"} letterSpacing={"1px"} mt={"-7px"}>
          <span style={{ fontWeight: "600" }}>Languages</span> :
          C,C++,Javascript
        </Text>{" "}
        <Text width={"100%"} letterSpacing={"1px"} mt={"-7px"}>
          <span style={{ fontWeight: "600" }}>Database</span> : MongoDB
        </Text>
        <Text width={"100%"} letterSpacing={"1px"} mt={"-7px"}>
          <span style={{ fontWeight: "600" }}>UI Technologies</span> :
          HTML,CSS,Bootstrap,ReactJs,ChakraUI
        </Text>
        <Text width={"100%"} letterSpacing={"1px"} mt={"-7px"}>
          <span style={{ fontWeight: "600" }}>Version Control System</span> :
          Git & GitHub
        </Text>
      </HStack>
      <Divider width={"100%"} height={"1px"} bg={"black"} />
      <HStack flexDirection={"column"} justifyContent={"flex-start"}>
        <Heading width={"100%"} fontSize={"17px"} letterSpacing={"2px"}>
          PROJECTS
        </Heading>
        <Text width={"100%"} fontWeight={"bolder"}>
          School Management Website
        </Text>
      </HStack>
      <Text textAlign={"justify"} width={"100%"} mt={"-7px"}>
        In this website all the features are implemented for runnig a school
        like admission , submitting fee, generation of admit and id card and
        many more. This is a full stack website made using Technologies given
        below :{" "}
      </Text>
      <Text mt={"-6px"} fontWeight={"600"}>
        Reactjs,Chakra UI,MongoDB,ExpressJs,Mongoose,Nodejs
      </Text>
      <Text>
        Link : <span style={{ color: "blue" }}>rpaic.netlify.app</span>
      </Text>
      <Divider width={"100%"} height={"1px"} bg={"black"} />
      <HStack flexDirection={"column"} justifyContent={"flex-start"}>
        <Heading width={"100%"} fontSize={"17px"} letterSpacing={"2px"}>
          Certifications
        </Heading>
        <Heading width={"100%"} fontSize={"14px"} letterSpacing={"2px"}>
          Javascript Algorithms And Data Structures
        </Heading>
        <Text width={"100%"}>
          Link :{" "}
          <span style={{ color: "blue" }}>
            https://www.freecodecamp.org/certification/vikas___kumar/javascript-algorithms-and-data-structures
          </span>
        </Text>
        <Heading width={"100%"} fontSize={"14px"} letterSpacing={"2px"}>
          Responsive Web Design
        </Heading>
        <Text width={"100%"}>
          Link :{" "}
          <span style={{ color: "blue" }}>
          https://www.freecodecamp.org/certification/vikas___kumar/responsive-web-design
          </span>
        </Text>
      </HStack>
    </VStack>
  );
};

export default VikasResume;
