import { Patient } from "@/types/patient";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PatientModalProps {
  patient: Patient | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PatientModal = ({ patient, open, onOpenChange }: PatientModalProps) => {
  if (!patient) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-6 w-6" />
            </div>
            {patient.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Basic Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Basic Information</h3>
            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Username</p>
                  <p className="text-foreground">{patient.username}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-sm font-semibold mt-0.5">Age</span>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Years</p>
                  <p className="text-foreground">{patient.age} years old</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Contact Information</h3>
            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-foreground break-all">{patient.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="text-foreground">{patient.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Address */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Address</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-foreground">
                  {patient.address.suite}, {patient.address.street}
                </p>
                <p className="text-foreground">
                  {patient.address.city}, {patient.address.zipcode}
                </p>
              </div>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PatientModal;
