import { Patient } from "@/types/patient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";

interface PatientCardProps {
  patient: Patient;
  onViewDetails: () => void;
}

const PatientCard = ({ patient, onViewDetails }: PatientCardProps) => {
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground line-clamp-1">
              {patient.name}
            </h3>
            <p className="text-sm text-muted-foreground">Age: {patient.age} years</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4 text-primary" />
          <span className="truncate">{patient.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 text-primary" />
          <span>{patient.phone}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={onViewDetails}
          variant="default"
          className="w-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PatientCard;
