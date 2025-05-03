import { Button, Container } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './headerStyle.module.css';

export function Header() {
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
          <Button variant="gradient" radius="xl" size="md">
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  );
}