using Hospital.Model;

namespace Hospital.DTO
{
    public class PatientProblemDTO
    {
        public List<ProblemList> ProblemList { get; set; }
        public int PatientId { get; set; }
    }

    public class ProblemList
    {
        public int ProblemId { get; set; }
        public string Description { get; set; }
    }
}
