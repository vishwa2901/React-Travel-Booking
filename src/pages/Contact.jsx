import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
    setError("");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="section">
      <div className="section-title">
        <h1>Contact Us</h1>
        <p>Have a question? We would love to hear from you.</p>
      </div>

      <div className="form-box">
        {submitted && (
          <div className="success-box">
            Your message has been sent successfully!
          </div>
        )}

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />

          <button className="primary-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;