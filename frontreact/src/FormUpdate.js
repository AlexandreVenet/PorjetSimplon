import { useState } from "react";

function FormUpdate() {
  const [data, setData] = useState({
    data: {
    pseudo:"P",
    age:"A",
    job:"J",
    pass:"Pa",
    }
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }
    return (
      <form name="update" className="form" onSubmit={handleSubmit}>
        <label> FORMULAIRE DE MODIFICATION
          <p><input type="text" id="pseudo" name="pseudo" value={data.pseudo || ""} onChange={handleChange} required/></p>
          <p><input type="text" id="age" name="age" value={data.age || ""} onChange={handleChange} required/></p>
          <p><input type="text" id="job" name="job" value={data.job || ""} onChange={handleChange} required/></p>
          <p><input type="text" id="pass" name="pass" value={data.pass || ""} onChange={handleChange} required/></p>
          <p><input type="submit" id="submit" /></p>
          {/* <button type="button" onClick={()=>setData(console.log({data}))}>Button</button> */}
        </label>
      </form>
    );
  }
  export default FormUpdate;