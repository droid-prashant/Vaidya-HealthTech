namespace Hospital.Model
{
    public class PatientProblem
    {
        public int Id { get; set; }
        public string Problem { get; set; }
        public Patient Patient { get; set; }
    }
}
