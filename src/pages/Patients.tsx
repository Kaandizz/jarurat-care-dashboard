import { useState, useEffect, useMemo } from "react";
import { Patient, NewPatientForm } from "@/types/patient";
import Header from "@/components/Header";
import PatientCard from "@/components/PatientCard";
import PatientModal from "@/components/PatientModal";
import SearchBar from "@/components/SearchBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import AddPatientForm from "@/components/AddPatientForm";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { toast } from "sonner";

const STORAGE_KEY = "jarurat_care_patients";

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Load patients from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const storedPatients = JSON.parse(stored);
        setPatients(storedPatients);
      } catch (e) {
        console.error("Failed to parse stored patients:", e);
      }
    }
  }, []);

  // Save patients to localStorage whenever they change
  useEffect(() => {
    if (patients.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
    }
  }, [patients]);

  // Fetch patients from API
  const fetchPatients = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      
      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }
      
      const data = await response.json();
      
      // Transform users to patients with mock age
      const patientsData: Patient[] = data.map((user: any) => ({
        ...user,
        age: Math.floor(Math.random() * (80 - 18 + 1)) + 18, // Random age between 18-80
      }));
      
      // Get stored patients
      const stored = localStorage.getItem(STORAGE_KEY);
      let localPatients: Patient[] = [];
      
      if (stored) {
        try {
          localPatients = JSON.parse(stored);
          // Filter out API patients (ones with id <= 10)
          localPatients = localPatients.filter(p => p.id > 10);
        } catch (e) {
          console.error("Failed to parse stored patients:", e);
        }
      }
      
      // Combine API patients with locally added ones
      const allPatients = [...patientsData, ...localPatients];
      setPatients(allPatients);
      toast.success("Patients loaded successfully");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      toast.error("Failed to load patients");
    } finally {
      setLoading(false);
    }
  };

  // Fetch on component mount
  useEffect(() => {
    fetchPatients();
  }, []);

  // Filter patients based on search query
  const filteredPatients = useMemo(() => {
    if (!searchQuery.trim()) return patients;
    
    const query = searchQuery.toLowerCase();
    return patients.filter((patient) =>
      patient.name.toLowerCase().includes(query)
    );
  }, [patients, searchQuery]);

  // Handle viewing patient details
  const handleViewDetails = (patient: Patient) => {
    setSelectedPatient(patient);
    setModalOpen(true);
  };

  // Handle adding new patient
  const handleAddPatient = (formData: NewPatientForm) => {
    const newPatient: Patient = {
      id: Math.max(...patients.map(p => p.id), 0) + 1,
      name: formData.name,
      age: parseInt(formData.age),
      email: formData.email,
      phone: formData.phone,
      username: formData.name.toLowerCase().replace(/\s+/g, '.'),
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
      address: {
        street: formData.address,
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
    };

    setPatients([...patients, newPatient]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Patient Records
          </h1>
          <p className="text-muted-foreground">
            Manage and view all patient information in one place
          </p>
        </div>

        {/* Search and Actions */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search patients by name..."
          />
          <AddPatientForm onAddPatient={handleAddPatient} />
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner message="Loading patients..." />}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-8 w-8" />
              <p className="text-lg font-medium">Error loading patients</p>
            </div>
            <p className="text-muted-foreground">{error}</p>
            <Button onClick={fetchPatients} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        {/* Patients Grid */}
        {!loading && !error && (
          <>
            {filteredPatients.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 gap-2">
                <p className="text-lg font-medium text-muted-foreground">
                  No patients found
                </p>
                {searchQuery && (
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search query
                  </p>
                )}
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-muted-foreground">
                  Showing {filteredPatients.length} of {patients.length} patients
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredPatients.map((patient) => (
                    <PatientCard
                      key={patient.id}
                      patient={patient}
                      onViewDetails={() => handleViewDetails(patient)}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Patient Details Modal */}
      <PatientModal
        patient={selectedPatient}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Patients;
