import {
  useReducer,
  useId,
  useRef,
  useState
} from "react";
import { useTravel } from "../context/TravelContext";

const initialState = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  date: "",
  travelers: "1",
  travelType: "Leisure",
  request: ""
};

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function Booking() {
  const { selectedPackage } = useTravel();

  const [form, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const destinationId = useId();
  const dateId = useId();
  const travelersId = useId();

  const successRef = useRef(null);

  function handleChange(event) {
    dispatch({
      name: event.target.name,
      value: event.target.value
    });

    setErrors({
      ...errors,
      [event.target.name]: ""
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone =
        "Enter a valid 10-digit phone number.";
    }

    if (!form.destination) {
      newErrors.destination =
        "Please select a destination.";
    }

    if (!form.date) {
      newErrors.date = "Please select a travel date.";
    }

    if (!form.travelers || Number(form.travelers) < 1) {
      newErrors.travelers =
        "At least one traveler is required.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);

    setTimeout(() => {
      successRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  }

  return (
    <section className="section">
      <div className="section-title">
        <h1>Book Your Trip</h1>
        <p>Complete the form and start planning your journey.</p>
      </div>

      {selectedPackage && (
        <div className="selected-package">
          <h3>Selected Package</h3>
          <p>{selectedPackage.name}</p>
          <strong>
            ₹{selectedPackage.price.toLocaleString()}
          </strong>
        </div>
      )}

      <div className="form-box">
        {success && (
          <div className="success-box" ref={successRef}>
            <h3>✓ Booking Request Submitted!</h3>
            <p>
              Thank you for choosing Pravasa. Our travel team
              will contact you shortly.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor={nameId}>Full Name</label>

          <input
            id={nameId}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          {errors.name && (
            <small className="field-error">
              {errors.name}
            </small>
          )}

          <label htmlFor={emailId}>Email</label>

          <input
            id={emailId}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && (
            <small className="field-error">
              {errors.email}
            </small>
          )}

          <label htmlFor={phoneId}>Phone Number</label>

          <input
            id={phoneId}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit phone number"
          />

          {errors.phone && (
            <small className="field-error">
              {errors.phone}
            </small>
          )}

          <label htmlFor={destinationId}>
            Destination
          </label>

          <select
            id={destinationId}
            name="destination"
            value={form.destination}
            onChange={handleChange}
          >
            <option value="">Select destination</option>
            <option value="Goa">Goa</option>
            <option value="Manali">Manali</option>
            <option value="Kerala">Kerala</option>
            <option value="Dubai">Dubai</option>
            <option value="Bali">Bali</option>
            <option value="Singapore">Singapore</option>
          </select>

          {errors.destination && (
            <small className="field-error">
              {errors.destination}
            </small>
          )}

          <label htmlFor={dateId}>Travel Date</label>

          <input
            id={dateId}
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />

          {errors.date && (
            <small className="field-error">
              {errors.date}
            </small>
          )}

          <label htmlFor={travelersId}>
            Number of Travelers
          </label>

          <input
            id={travelersId}
            name="travelers"
            type="number"
            min="1"
            value={form.travelers}
            onChange={handleChange}
          />

          {errors.travelers && (
            <small className="field-error">
              {errors.travelers}
            </small>
          )}

          <label>Travel Type</label>

          <select
            name="travelType"
            value={form.travelType}
            onChange={handleChange}
          >
            <option value="Leisure">Leisure</option>
            <option value="Adventure">Adventure</option>
            <option value="Family">Family</option>
            <option value="Business">Business</option>
          </select>

          <label>Special Request</label>

          <textarea
            name="request"
            value={form.request}
            onChange={handleChange}
            placeholder="Any special requirements?"
          />

          <button className="primary-btn">
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;