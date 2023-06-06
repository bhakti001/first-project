import { useEffect, useRef, useState } from "react";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [mobileno, setMobileno] = useState(" ");
  const [password, setPassword] = useState("");

  const bgRef = useRef();
  useEffect(() => {
    if (isSubmitted) {
      bgRef.current.style.backgroundColour = "darkgray";
    } else {
      bgRef.current.style.backgroundColour = "blue";
    }
  }, [isSubmitted]);

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  return (
    <div className="user-form" ref={bgRef}>
      <form action="" onSubmit={(e) => onSubmit(e)}>
        <input
          className="form-control"
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="enter your name"
        />
        <input
          className="form-control"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enter your email"
        />
        <input
          className="form-control"
          name="mobileNo"
          onChange={(e) => setMobileno(e.target.value)}
          type="mobileNo"
          placeholder="enter your mobileNo"
        />
        <input
          className="form-control"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter your password"
        />
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
      {isSubmitted && (
        <div style={{ textAlign: "left", marginTop: "10px" }}>
          <div>
            <label htmlFor="">Username:</label>
            <span>{name}</span>
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <span>{email}</span>
          </div>
          <div>
            <label htmlFor="">Mobile no:</label>
            <span>{mobileno}</span>
          </div>
          <div>
            <label htmlFor="">Password:</label>
            <span>{password}</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default Form;
