type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  bio?: string;
  preferredLanguage: string;
  communicationPreferences: {
    email: boolean;
    sms: boolean;
    phone: boolean;
  };
};

export async function updateUserProfile(
  data: ProfileData
): Promise<{ success: boolean }> {
  // Simulate a delay to mimic a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real application, you would update the user's profile in a database
  console.log("Updating user profile with data:", data);

  // Simulate a successful update
  return { success: true };
}

export async function getUserProfile(): Promise<ProfileData | null> {
  // Simulate a delay to mimic a network request
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In a real application, you would fetch the user's profile from a database
  // For now, return mock data
  return {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    dateOfBirth: new Date("1990-01-01"),
    gender: "male",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    emergencyContactName: "Jane Doe",
    emergencyContactPhone: "0987654321",
    emergencyContactRelationship: "Spouse",
    bio: "Healthcare professional with 10 years of experience.",
    preferredLanguage: "english",
    communicationPreferences: {
      email: true,
      sms: true,
      phone: false,
    },
  };
}
