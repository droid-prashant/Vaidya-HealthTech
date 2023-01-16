using Hospital.DAL;
using Hospital.DTO;
using Hospital.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientProblemController : ControllerBase
    {
        private readonly HospitalDbContext _context;
        public PatientProblemController(HospitalDbContext context)
        {
            _context = context;
        }

        // GET: api/<PatientProblemController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PatientProblemController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PatientProblemController>
        [HttpPost]
        public IActionResult Post([FromBody] PatientProblemDTO patientProblem)
        {
            var Patient=_context.Patients.FirstOrDefault(x => x.Id == patientProblem.PatientId);
            

            foreach (var item in patientProblem.ProblemList)
            {
                var newProblem = new PatientProblem();
                newProblem.Problem = item.Description;
                newProblem.Patient = Patient;
                _context.Add(newProblem);
                _context.SaveChanges();
            }
            return Ok();
        }

        // PUT api/<PatientProblemController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PatientProblemController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
