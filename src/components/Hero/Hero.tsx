import { Button, Container, Overlay, Text, Title } from "@mantine/core"

import classes from "./heroStyle.module.css"

export function Hero() {

  return (
    <>
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="lg">
        <div className={classes.content}>
          <div className={classes.textSection}>
            <Title className={classes.title}>Altheia</Title>
            <Text className={classes.description} size="xl" mt="xl">
              Altheia is a modern Electronic Health Record system designed to streamline patient care, improve clinical
              workflows, and ensure secure, real-time access to medical data.
            </Text>
            <div className={classes.control}>
                <Button 
                  variant="gradient" 
                  size="xl" 
                  radius="xl" 
                  className={classes.control}
                >
                  Get Started
                </Button>
                <Button variant="outline" size="xl" radius="xl" className={classes.control}>Learn more</Button> 
            </div>
          </div>
        </div>
      </Container> 
    </div>
    </>
  )
}
