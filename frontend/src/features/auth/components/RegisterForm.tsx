import '../../../assets/style/RegisterStyle/RegisterForm.css'
export default function RegisterForm() {
    return (
        <div className="register-page">
          <div className="register-box">
            <h2 className="register-title">Create Account</h2>
            <form className="register-form">
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" />
              <select required>
                <option value="">Select Role</option>
                <option value="member">Member</option>
                <option value="intern">Intern</option>
                <option value="teamleader">Team Leader</option>
              </select>
              <input type="text" placeholder="Team Name" />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      );
};


