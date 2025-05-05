import { useState } from 'react';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from '@tabler/icons-react';
import { AppShell, Center, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './Navbar.module.css';
import { Outlet, useNavigate } from 'react-router';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata: { icon: typeof IconHome2; label: string, link: string}[] = [
  { icon: IconHome2, label: 'Dashboard', link:'dashboard' },
  { icon: IconGauge, label: 'Pacientes', link:'patients' },
  { icon: IconDeviceDesktopAnalytics, label: 'Citas', link: 'schedule' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {setActive(index); navigate(link.link)}}
    />
  ));

  return (
    <AppShell navbar={{width:80, breakpoint:"md"}}>
      <AppShell.Navbar className={classes.navbar}>
      <Center>
        <IconFingerprint size={30}/>
      </Center>

        <div className={classes.navbarMain}>
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>

        <Stack justify="center" gap={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main className={classes.content}>
        <Outlet>

        </Outlet>
      </AppShell.Main>
    </AppShell>
  );
}