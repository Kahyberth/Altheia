import { Link } from "react-router"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">HealthConnect EHR</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="grid gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome back, Sarah</h1>
              <p className="text-muted-foreground">Manage patient appointments and records efficiently.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/receptionist/dashboard/appointment-management"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <title>Calendar Icon</title>
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <h3 className="font-semibold">Appointments</h3>
                </div>
                <p className="text-sm text-muted-foreground">Manage patient appointments and schedule</p>
              </div>
            </Link>
            <Link
              to="/receptionist/dashboard/patients-management"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <title>Users Icon</title>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <h3 className="font-semibold">Patients</h3>
                </div>
                <p className="text-sm text-muted-foreground">Manage patient information and demographics</p>
              </div>
            </Link>
            <Link
              to="/receptionist/dashboard/lab-results"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <title>Document Icon</title>
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M9 15v-6" />
                    <path d="M12 12v3" />
                    <path d="M15 9v6" />
                  </svg>
                  <h3 className="font-semibold">Lab Results</h3>
                </div>
                <p className="text-sm text-muted-foreground">Upload and manage patient laboratory results</p>
              </div>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-background shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Today's Appointments</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        JD
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - Dr. Smith</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                        Confirmed
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        MJ
                      </div>
                      <div>
                        <p className="font-medium">Mary Johnson</p>
                        <p className="text-sm text-muted-foreground">10:30 AM - Dr. Williams</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-700 border-yellow-200">
                        Pending
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        RB
                      </div>
                      <div>
                        <p className="font-medium">Robert Brown</p>
                        <p className="text-sm text-muted-foreground">2:15 PM - Dr. Johnson</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/receptionist/dashboard/appointment-page" className="inline-flex items-center text-sm font-medium text-primary">
                    View all appointments
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <title>Chevron Right Icon</title>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Recent Activities</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-4 border-b pb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <title>File Icon</title>
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Lab results uploaded</p>
                      <p className="text-sm text-muted-foreground">Blood work results for Emily Clark</p>
                      <p className="text-xs text-muted-foreground mt-1">10 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-b pb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <title>Check Calendar Icon</title>
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="m9 16 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Appointment confirmed</p>
                      <p className="text-sm text-muted-foreground">John Doe confirmed appointment with Dr. Smith</p>
                      <p className="text-xs text-muted-foreground mt-1">45 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <title>Users Group Icon</title>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">New patient registered</p>
                      <p className="text-sm text-muted-foreground">Sarah Thompson completed registration</p>
                      <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
