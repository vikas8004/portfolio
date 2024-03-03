import React from "react";
import { Text, HStack, VStack, Heading } from "@chakra-ui/react";
import { motion ,useScroll,useSpring} from "framer-motion";

const Navbar = () => {
    const {scrollYProgress}=useScroll()
    const scalex = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        
      });
  return (
    <HStack flexDir={"column"} width={"full"} p={2}>
        <motion.div className="progress-bar" style={{scaleX:scalex}}
        transition={{type:"spring"}}
        />
      <Text textAlign={"justify"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        necessitatibus iusto voluptatem repellendus quis beatae quae nemo illo
        fugiat deserunt eos molestias facere incidunt, reiciendis nulla,
        delectus suscipit, sapiente distinctio iste facilis. Quidem enim magnam,
        placeat illum inventore praesentium rerum necessitatibus odio animi
        reprehenderit nisi deserunt distinctio voluptas quis ullam aspernatur
        consequatur voluptatum. Neque accusantium deserunt in facilis, totam id
        ratione quisquam et natus, libero distinctio quidem vitae cupiditate
        obcaecati eveniet! Iure iusto delectus nihil animi perferendis
        architecto quos, explicabo amet, fugiat nisi corporis dicta ratione
        totam magnam error voluptatum quasi perspiciatis doloremque. Eos sed
        inventore in praesentium minus necessitatibus dicta, doloremque
        provident suscipit tenetur velit facilis? Quas quos animi repellat sed
        id ipsum dignissimos quae illum ipsa esse iste saepe perspiciatis
        molestias maxime vel nisi, maiores voluptatem beatae cum necessitatibus
        magni suscipit aliquid? Corrupti obcaecati suscipit aliquid inventore?
        Exercitationem eaque repudiandae earum dignissimos, doloremque,
        inventore quod illum saepe placeat rem labore. Dolorem nesciunt
        perferendis sequi aut nobis laudantium libero est ducimus quo distinctio
        laboriosam vitae labore amet expedita, non accusamus totam quos aliquam
        repellendus voluptates illum? Repellendus consectetur beatae libero
        laborum voluptas eos ab voluptatum! Repudiandae porro ex pariatur odio,
        quo minima laborum? Unde dignissimos sint iure atque impedit
        necessitatibus est possimus eum, totam maxime consectetur magnam
        voluptatem, culpa corrupti et, doloremque consequatur qui asperiores?
        Nisi quisquam incidunt iusto praesentium velit non laudantium temporibus
        provident nam nulla? Totam dolorem aliquid officiis dicta? Illum porro
        pariatur quasi ipsa expedita consequatur nam saepe quas quisquam
        officiis quo corrupti voluptatibus, repellendus excepturi cum laudantium
        assumenda placeat rerum. Optio a veniam adipisci doloribus aut,
        officiis, repudiandae, nobis ipsam repellendus necessitatibus maxime
        accusamus rem! Velit tenetur similique asperiores deserunt itaque, dolor
        molestias sint nemo a neque adipisci amet architecto quos qui voluptatum
        cumque sequi corrupti obcaecati commodi minus maxime! Minima architecto
        autem doloremque quis laborum consequatur expedita repudiandae vel id?
        Eos facilis quibusdam nam eveniet consequuntur ea inventore blanditiis
        eum tenetur. Explicabo consequatur, porro amet dolor expedita
        dignissimos, reiciendis harum ad id aliquam rem deleniti, magni
        obcaecati. In molestias aut accusamus vero corrupti laborum, neque esse
        et cum natus dolorem, minima nostrum ipsa recusandae nisi blanditiis
        distinctio odit exercitationem accusantium ea. Dolorem expedita,
        corporis ex similique laboriosam provident at ducimus nobis dolores
        sapiente. Enim rerum earum rem numquam necessitatibus natus cupiditate
        ratione reiciendis repellat deleniti reprehenderit quos optio quaerat
        provident fugit temporibus, quisquam mollitia quod ea nisi repudiandae
        veniam odio in itaque. Provident, nostrum facere. Deserunt quaerat enim,
        soluta eligendi accusantium odio praesentium totam ipsam, voluptate
        incidunt maiores? Totam fugiat eaque rem suscipit impedit corporis
        veniam porro est sunt officiis aperiam doloremque labore repellendus
        quia vel, culpa explicabo optio numquam nemo quibusdam tenetur illo. Ad
        optio aliquam delectus eius? Ducimus dolorem fuga nihil labore modi
        exercitationem doloribus, iste officia a debitis maxime laboriosam ab
        culpa, deleniti amet repellendus repudiandae ea! Vel soluta molestias
        nisi quo explicabo ullam, ipsam consequatur nulla facilis ea ad,
        assumenda rerum amet quisquam repellat natus porro aliquam qui beatae
        odit voluptatem! Illo illum sed aut, id modi minima porro pariatur.
      </Text>
      <motion.div
        // initial={{ opacity: 0, x: "-50vw" }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{
        //   duration: 1,
        //   type: "spring",
        //   stiffness:100,
        //   damping:10,
         
         
        // }}
        // viewport={{ once: false }}
      >
       <HStack>
        <VStack><Text>100</Text></VStack>
        <VStack><Text>200</Text></VStack>
        <VStack><Text>20</Text></VStack>
        <VStack>50</VStack>
       </HStack>
      </motion.div>
    </HStack>
  );
};

export default Navbar;
