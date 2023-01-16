using Hospital.DAL;
using Hospital.DTO;
using Hospital.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly HospitalDbContext db;
        public DoctorController(HospitalDbContext _db)
        {
            this.db = _db;
        }
        // GET: api/<DoctorController>
        [HttpGet]
        public IActionResult GetDoctors()
        {
            var doctorList = db.Doctors.Where(a=>a.IsActive==true).ToList();
            return Ok(doctorList);
        }

        // GET api/<DoctorController>/
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var doctor = db.Doctors.Where(x => x.DoctorId == id).FirstOrDefault();
            return Ok(doctor);
        }

        // POST api/<DoctorController>
        [HttpPost]
        public void AddDoctor([FromBody] DoctorDTO docDTO)
        {
            Doctor newDoctor = new Doctor();
            newDoctor.FirstName = docDTO.FirstName;
            newDoctor.LastName= docDTO.LastName;
            newDoctor.Address = docDTO.Address;
            newDoctor.PhoneNumber = docDTO.PhoneNumber;
            newDoctor.Specialist= docDTO.Specialist;
            newDoctor.IsActive = true;
            db.Add(newDoctor);
            db.SaveChanges();

        }

        // PUT api/<DoctorController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Doctor doctor)
        {
            var editDoctor = db.Doctors.Where(a=>a.DoctorId==id).FirstOrDefault();

            editDoctor.FirstName = doctor.FirstName;
            editDoctor.LastName = doctor.LastName;
            editDoctor.Address = doctor.Address;
            editDoctor.PhoneNumber = doctor.PhoneNumber;
            editDoctor.Specialist = doctor.Specialist;
            db.SaveChanges();
            return Ok(editDoctor);
        }

        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var doctor=db.Doctors.Where(a=>a.DoctorId==id).FirstOrDefault();
            doctor.IsActive=false;
            db.SaveChanges();
        }
    }
}
