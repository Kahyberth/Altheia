import { AppShell, Grid, Paper, Text, Title, Group, Stack, Card } from '@mantine/core';
import { IconHeartbeat, IconStethoscope, IconCalendar, IconNotes } from '@tabler/icons-react';

export function Dashboard() {
  return (
    <AppShell padding="md">
      <Title order={1} mb="lg">EHR Dashboard</Title>
      
      <Grid>
        {/* Quick Stats */}
        <Grid.Col span={12}>
          <Group grow>
            <Paper shadow="sm" p="md" withBorder>
              <Group>
                <IconHeartbeat size={24} color="red" />
                <Stack gap={0}>
                  <Text size="xs" c="dimmed">Patients Today</Text>
                  <Text size="lg" fw={500}>24</Text>
                </Stack>
              </Group>
            </Paper>

            <Paper shadow="sm" p="md" withBorder>
              <Group>
                <IconStethoscope size={24} color="blue" />
                <Stack gap={0}>
                  <Text size="xs" c="dimmed">Appointments</Text>
                  <Text size="lg" fw={500}>12</Text>
                </Stack>
              </Group>
            </Paper>

            <Paper shadow="sm" p="md" withBorder>
              <Group>
                <IconCalendar size={24} color="green" />
                <Stack gap={0}>
                  <Text size="xs" c="dimmed">Scheduled</Text>
                  <Text size="lg" fw={500}>8</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
        </Grid.Col>

        {/* Recent Patients */}
        <Grid.Col span={6}>
          <Card shadow="sm" p="md" withBorder>
            <Title order={3} mb="md">Recent Patients</Title>
            <Stack>
              {[1, 2, 3].map((i) => (
                <Paper key={i} p="sm" withBorder>
                  <Group justify="space-between">
                    <Stack gap={2}>
                      <Text fw={500}>John Doe</Text>
                      <Text size="xs" c="dimmed">Last visit: 2 days ago</Text>
                    </Stack>
                    <IconNotes size={20} />
                  </Group>
                </Paper>
              ))}
            </Stack>
          </Card>
        </Grid.Col>

        {/* Upcoming Appointments */}
        <Grid.Col span={6}>
          <Card shadow="sm" p="md" withBorder>
            <Title order={3} mb="md">Upcoming Appointments</Title>
            <Stack>
              {[1, 2, 3].map((i) => (
                <Paper key={i} p="sm" withBorder>
                  <Group justify="space-between">
                    <Stack gap={2}>
                      <Text fw={500}>Jane Smith</Text>
                      <Text size="xs" c="dimmed">Today at 2:00 PM</Text>
                    </Stack>
                    <Text size="sm" c="dimmed">Check-up</Text>
                  </Group>
                </Paper>
              ))}
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}