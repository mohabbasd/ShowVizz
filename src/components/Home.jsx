import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl",
};

const Home = () => {
    return <Box>
        <MyCarousel />
        <Container maxW={"container.xl"} minH={"100vh"} p="16">
            <Heading
                textTransform={"uppercase"}
                py="2"
                w={"fit-content"}
                borderBottom={"2px solid"}
                m={"auto"}>
                Services
            </Heading>

            <Stack
                h={"full"}
                p={"4"}
                alignItems={"center"}
                direction={["column", "row"]}
            >
                <Image
                    src={img5}
                    h={["40", "400"]}
                    filter={"hue-rotate(-130deg)"}
                />

                <Text
                    letterSpacing={"widest"}
                    lineHeight={"190%"}
                    p={["4", "16"]}
                    textAlign={"center"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam, minus quas rem, sed eveniet magni animi dolor eos, facere dolorum quasi sit saepe dolores perspiciatis corporis ratione harum quia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel error dolores, maiores quaerat odio quas omnis tempore beatae sunt voluptatibus vero, fugit magnam a consectetur. Quo iste maxime nostrum?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quis nemo quibusdam hic, incidunt dolorum quas nulla dolores iure nesciunt pariatur facere iste consequuntur nobis, magni velit provident voluptate corporis.
                </Text>

            </Stack>

        </Container>
    </Box>;
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
    >
        <Box w='full' h={'100vh'}>
            <Image src={img1} h='full' w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Watch the future
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img2} h='full' w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions}>
                Future is gaming
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img3} h='full' w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img4} h='full' w={'full'} objectFit={'cover'}/>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Night life is cool
            </Heading>
        </Box>

    </Carousel>
)

export default Home