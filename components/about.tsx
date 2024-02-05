import {  Stack, Text } from "@chakra-ui/react"

const About = ({ text }: { text: string }) => (
  <Stack py='2em'>
    <Text>
        { text }
    </Text>
  </Stack>
)

export default About



