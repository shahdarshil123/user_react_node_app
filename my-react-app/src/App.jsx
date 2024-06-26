// import axios from 'axios';

function App() {
//  let data =  await axios.get("http://localhost:3000/id");
//  console.log(data);
  return (
    <>
  <div className="form-container">
    <h2>User Detail Form</h2>
    <form action="/submit" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <button type="submit">Submit</button>
    </form>
    </div>
    </>
  )
}

export default App
