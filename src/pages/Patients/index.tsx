import { useState } from 'react';
import { 
  Table, 
  Group, 
  Text, 
  ActionIcon, 
  Menu, 
  TextInput,
  Button,
  Modal,
  Stack,
  Select,
  Pagination,
  Box,
  Title,
  Paper
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconSearch, 
  IconEdit, 
  IconTrash, 
  IconDotsVertical, 
  IconFilter, 
  IconPlus,
  IconChevronDown
} from '@tabler/icons-react';

// Mock data - replace with actual API calls
const mockPatients = [
  { id: '1', name: 'John Doe', dob: '1985-05-15', gender: 'Male', phone: '(555) 123-4567', email: 'john.doe@example.com', lastVisit: '2023-10-12' },
  { id: '2', name: 'Jane Smith', dob: '1990-08-22', gender: 'Female', phone: '(555) 987-6543', email: 'jane.smith@example.com', lastVisit: '2023-11-05' },
  { id: '3', name: 'Robert Johnson', dob: '1978-03-10', gender: 'Male', phone: '(555) 456-7890', email: 'robert.j@example.com', lastVisit: '2023-09-28' },
  { id: '4', name: 'Emily Davis', dob: '1992-12-03', gender: 'Female', phone: '(555) 789-0123', email: 'emily.d@example.com', lastVisit: '2023-11-15' },
  { id: '5', name: 'Michael Wilson', dob: '1965-07-19', gender: 'Male', phone: '(555) 234-5678', email: 'michael.w@example.com', lastVisit: '2023-10-30' },
];

export function Patients() {
  const [patients, setPatients] = useState(mockPatients);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setPage] = useState(1);

  // Filter patients based on search query
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.phone.includes(searchQuery)
  );

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    open();
  };

  const handleDelete = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  const handleSave = (updatedPatient) => {
    if (selectedPatient) {
      // Update existing patient
      setPatients(patients.map(p => p.id === updatedPatient.id ? updatedPatient : p));
    } else {
      // Add new patient
      setPatients([...patients, { ...updatedPatient, id: (patients.length + 1).toString() }]);
    }
    close();
  };

  const handleAddNew = () => {
    setSelectedPatient(null);
    open();
  };

  const rows = filteredPatients.map((patient) => (
    <Table.Tr key={patient.id}>
      <Table.Td>{patient.name}</Table.Td>
      <Table.Td>{new Date(patient.dob).toLocaleDateString()}</Table.Td>
      <Table.Td>{patient.gender}</Table.Td>
      <Table.Td>{patient.phone}</Table.Td>
      <Table.Td>{patient.email}</Table.Td>
      <Table.Td>{new Date(patient.lastVisit).toLocaleDateString()}</Table.Td>
      <Table.Td>
        <Group gap="xs" justify="flex-end">
          <ActionIcon variant="subtle" color="blue" onClick={() => handleEdit(patient)}>
            <IconEdit size={16} />
          </ActionIcon>
          <Menu position="bottom-end" withArrow>
            <Menu.Target>
              <ActionIcon variant="subtle">
                <IconDotsVertical size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconEdit size={14} />} onClick={() => handleEdit(patient)}>
                Edit
              </Menu.Item>
              <Menu.Item 
                leftSection={<IconTrash size={14} />} 
                color="red" 
                onClick={() => handleDelete(patient.id)}
              >
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box p="md">
      <Paper p="md" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={2}>Patients</Title>
          <Button leftSection={<IconPlus size={16} />} onClick={handleAddNew}>
            Add Patient
          </Button>
        </Group>

        <Group mb="md">
          <TextInput
            placeholder="Search patients..."
            leftSection={<IconSearch size={16} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            style={{ flexGrow: 1 }}
          />
          <Menu position="bottom-end">
            <Menu.Target>
              <Button variant="outline" leftSection={<IconFilter size={16} />} rightSection={<IconChevronDown size={16} />}>
                Filter
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>All Patients</Menu.Item>
              <Menu.Item>Recent Visits</Menu.Item>
              <Menu.Item>Upcoming Appointments</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Date of Birth</Table.Th>
              <Table.Th>Gender</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Last Visit</Table.Th>
              <Table.Th style={{ textAlign: 'right' }}>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={7}>
                  <Text ta="center" c="dimmed" py="md">
                    No patients found
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>

        <Group justify="flex-end" mt="md">
          <Pagination total={Math.ceil(filteredPatients.length / 10)} value={activePage} onChange={setPage} />
        </Group>
      </Paper>

      {/* Patient Edit/Add Modal */}
      <Modal opened={opened} onClose={close} title={selectedPatient ? "Edit Patient" : "Add New Patient"} size="md">
        <PatientForm patient={selectedPatient} onSave={handleSave} onCancel={close} />
      </Modal>
    </Box>
  );
}

// Patient form component for add/edit
function PatientForm({ 
  patient, 
  onSave, 
  onCancel 
}: { 
  patient: { 
    id?: string;
    name: string;
    dob: string;
    gender: string;
    phone: string;
    email: string;
    lastVisit: string;
  } | null;
  onSave: (patient: {
    id: string;
    name: string;
    dob: string;
    gender: string;
    phone: string;
    email: string;
    lastVisit: string;
  }) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState({
    id: patient?.id || '',
    name: patient?.name || '',
    dob: patient?.dob || '',
    gender: patient?.gender || '',
    phone: patient?.phone || '',
    email: patient?.email || '',
    lastVisit: patient?.lastVisit || new Date().toISOString().split('T')[0]
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <Stack>
      <TextInput
        label="Full Name"
        placeholder="Enter patient name"
        value={form.name}
        onChange={(e) => handleChange('name', e.currentTarget.value)}
        required
      />
      
      <TextInput
        label="Date of Birth"
        type="date"
        value={form.dob}
        onChange={(e) => handleChange('dob', e.currentTarget.value)}
        required
      />
      
      <Select
        label="Gender"
        placeholder="Select gender"
        data={[
          { value: 'Male', label: 'Male' },
          { value: 'Female', label: 'Female' },
          { value: 'Other', label: 'Other' }
        ]}
        value={form.gender}
        onChange={(value) => handleChange('gender', value)}
        required
      />
      
      <TextInput
        label="Phone Number"
        placeholder="Enter phone number"
        value={form.phone}
        onChange={(e) => handleChange('phone', e.currentTarget.value)}
      />
      
      <TextInput
        label="Email"
        placeholder="Enter email address"
        value={form.email}
        onChange={(e) => handleChange('email', e.currentTarget.value)}
      />
      
      <TextInput
        label="Last Visit"
        type="date"
        value={form.lastVisit}
        onChange={(e) => handleChange('lastVisit', e.currentTarget.value)}
      />
      
      <Group justify="flex-end" mt="md">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Group>
    </Stack>
  );
}