using Hospital.Model;

namespace Hospital.DTO
{
    public class MedicationDTO
    {
        public int Id { get; set; }
        public string Medicine { get; set; }
        public int PatientProblemId { get; set; }
    }
}
