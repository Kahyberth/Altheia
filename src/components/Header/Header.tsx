import { Button, Container, Modal } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './headerStyle.module.css';
import { AuthenticationForm } from '../Auth/AuthModal';
import { useDisclosure } from '@mantine/hooks';

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container className={classes.container} size="lg">
        <div className={classes.logo}>Altheia</div>
        <nav className={classes.navLinks}>
          <Link to="/" className={classes.navLink}>Home</Link>
          <Link to="/features" className={classes.navLink}>Features</Link>
          <Link to="/about" className={classes.navLink}>About</Link>
          <Link to="/contact" className={classes.navLink}>Contact</Link>
        </nav>
        <div className={classes.cta}>
          <Button variant="gradient" radius="xl" size="md" onClick={ open }>
            Get Started
          </Button>
        </div>
      </Container>

      <Modal opened={opened} onClose={close} centered size="sm" withCloseButton={false} padding={0} radius="md">
        <AuthenticationForm />
      </Modal>
    </header>
  );
}