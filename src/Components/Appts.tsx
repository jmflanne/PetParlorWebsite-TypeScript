//form page where user submits information for an appointment
//form elements are validated based on time and text content

import NavBar from "./NavBar";
import DateandTimePicker from "./DateandTimePicker";
import Button from "./Button";
import { ChangeEvent, useState } from "react";
import Alert from "./Alert";
import SingleLineInput from "./SingleLineInput";
import ApptSetPage from "./ApptSetPage";
function Appts() {
  //manage inputs and validate
  type Inputs = {
    date: string;
    time: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNum: string;
    petName: string;
    petBreed: string;
    serviceOne: boolean;
    serviceTwo: boolean;
    serviceThree: boolean;
  };

  const [inputs, setInputs] = useState<Inputs>({
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    petName: "",
    petBreed: "",
    serviceOne: false,
    serviceTwo: false,
    serviceThree: false,
  });

  type Errors = Partial<Record<keyof Inputs, string>>;

  type Touched = Partial<Record<keyof Inputs, boolean>>;
  const [touched, setTouched] = useState<Touched>({});

  //This is where we define the any error message for the input components
  const validate = (newInputs: Inputs): Errors => {
    const newErrors: Errors = {};
    let dateLimit = new Date();
    const nextYear = dateLimit.getFullYear() + 1;
    const currentYear = dateLimit.getFullYear();
    const currentMonth = dateLimit.getMonth() + 1;
    const currentDay = dateLimit.getDate();
    const dateComponents = newInputs.date.split("-");
    const inputYear = parseInt(dateComponents[0]);
    const inputMonth = parseInt(dateComponents[1]);
    const inputDay = parseInt(dateComponents[2]);

    if (
      parseInt(newInputs.time) >= 20 ||
      parseInt(newInputs.time) < 9 ||
      newInputs.time.length === 0
    ) {
      newErrors.time = "Appointment time must be between 9:00AM and 8:00PM";
    }
    if (newInputs.date.length === 0) {
      newErrors.date =
        "Date is required. Must be at least next day and within the next year";
    } else if (inputYear >= nextYear) {
      if (inputMonth > currentMonth || inputYear >= nextYear + 1) {
        newErrors.date =
          "Date is required. Must be at least next day and within the next year";
      }
    } else if (inputYear <= currentYear) {
      if (
        inputYear < currentYear ||
        inputMonth < currentMonth ||
        (inputDay <= currentDay && inputMonth === currentMonth)
      ) {
        newErrors.date =
          "Date is required. Must be at least next day and within the next year";
      }
    }

    if (newInputs.firstName.length === 0) {
      newErrors.firstName = "First name is required";
    }
    if (newInputs.lastName.length === 0) {
      newErrors.lastName = "Last name is required";
    }
    if (!newInputs.email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!(newInputs.phoneNum.length >= 10)) {
      newErrors.phoneNum = "Please enter your 10 digit phone number";
    }

    if (newInputs.petName.length === 0) {
      newErrors.petName = "Pet name is required";
    }

    if (newInputs.petBreed.length === 0) {
      newErrors.petBreed = "Pet breed is required";
    }

    if (
      newInputs.serviceOne === false &&
      newInputs.serviceTwo === false &&
      newInputs.serviceThree === false
    ) {
      newErrors.serviceOne = "Atleast one service must be selected";
    }

    return newErrors;
  };
  const [errors, setErrors] = useState<Errors>(validate(inputs));

  const [showApptPage, setShowApptPage] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("submitted");
      event.currentTarget.setAttribute("style", "display:none");
      const form = document.querySelector("#apptFieldset");
      form?.setAttribute("disabled", "true");
      setShowApptPage(true);
      console.log(showApptPage);
    } else {
      setAttemptedSubmit(true);
    }
  };
  //SingleLineInput represents text input
  return (
    <div>
      <NavBar />
      <h1 style={{ padding: "10px" }}>Create an Appointment</h1>

      <form id="apptForm" noValidate>
        <fieldset id="apptFieldset">
          <DateandTimePicker
            timeValue={inputs.time}
            timeOnChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputs({
                ...inputs,
                time: event.target.value,
              });
              setErrors(validate({ ...inputs, time: event.target.value }));
            }}
            timeOnBlur={() => setTouched({ ...touched, time: true })}
            dateValue={inputs.date}
            dateOnChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputs({ ...inputs, date: event.target.value });
              setErrors(validate({ ...inputs, date: event.target.value }));
            }}
            dateOnBlur={() => setTouched({ ...touched, date: true })}
          />
          {(errors.date && touched.date) ||
          (!touched.date && attemptedSubmit && errors.date) ? (
            <Alert warning={errors.date}></Alert>
          ) : null}
          {(errors.time && touched.time) ||
          (!touched.time && attemptedSubmit && errors.time) ? (
            <Alert warning={errors.time}></Alert>
          ) : null}

          <SingleLineInput
            input="First Name"
            placeholder="first name"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputs({ ...inputs, firstName: event.target.value });
              setErrors(validate({ ...inputs, firstName: event.target.value }));
            }}
            value={inputs.firstName}
            onBlur={() => setTouched({ ...touched, firstName: true })}
          />
          {(errors.firstName && touched.firstName) ||
          (!touched.firstName && attemptedSubmit && errors.firstName) ? (
            <Alert warning={errors.firstName}></Alert>
          ) : null}
          <SingleLineInput
            input="Last Name"
            placeholder="last name"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputs({ ...inputs, lastName: event.target.value });
              setErrors(validate({ ...inputs, lastName: event.target.value }));
            }}
            value={inputs.lastName}
            onBlur={() => setTouched({ ...touched, lastName: true })}
          />

          {(errors.lastName && touched.lastName) ||
          (!touched.lastName && attemptedSubmit && errors.lastName) ? (
            <Alert warning={errors.lastName}></Alert>
          ) : null}

          <SingleLineInput
            input="email"
            placeholder="email"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputs({ ...inputs, email: event.target.value });
              setErrors(validate({ ...inputs, email: event.target.value }));
            }}
            value={inputs.email}
            onBlur={() => setTouched({ ...touched, email: true })}
          />

          {(errors.email && touched.email) ||
          (!touched.email && attemptedSubmit && errors.email) ? (
            <Alert warning={errors.email}></Alert>
          ) : null}
          <SingleLineInput
            input="Phone Number"
            placeholder="(XXX)XXX-XXXX"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputs({ ...inputs, phoneNum: event.target.value });
              setErrors(validate({ ...inputs, phoneNum: event.target.value }));
            }}
            value={inputs.phoneNum}
            onBlur={() => setTouched({ ...touched, phoneNum: true })}
          />
          {(errors.phoneNum && touched.phoneNum) ||
          (!touched.phoneNum && attemptedSubmit && errors.phoneNum) ? (
            <Alert warning={errors.phoneNum}></Alert>
          ) : null}
          <SingleLineInput
            input="Pet Name"
            placeholder="pet name"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputs({ ...inputs, petName: event.target.value });
              setErrors(validate({ ...inputs, petName: event.target.value }));
            }}
            value={inputs.petName}
            onBlur={() => setTouched({ ...touched, petName: true })}
          />

          {(errors.petName && touched.petName) ||
          (!touched.petName && attemptedSubmit && errors.petName) ? (
            <Alert warning={errors.petName}></Alert>
          ) : null}
          <SingleLineInput
            input="Pet Breed"
            placeholder="pet breed"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputs({ ...inputs, petBreed: event.target.value });
              setErrors(validate({ ...inputs, petBreed: event.target.value }));
              console.log(inputs.serviceOne);
            }}
            value={inputs.petBreed}
            onBlur={() => setTouched({ ...touched, petBreed: true })}
          />

          {(errors.petBreed && touched.petBreed) ||
          (!touched.petBreed && attemptedSubmit && errors.petBreed) ? (
            <Alert warning={errors.petBreed}></Alert>
          ) : null}

          <div style={{ padding: "10px" }}>
            <span className="input-group-text" id="serviceSelection">
              Service Selection:
            </span>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="bathCheck"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setInputs({ ...inputs, serviceOne: event.target.checked });
                  setErrors(
                    validate({ ...inputs, serviceOne: event.target.checked })
                  );
                }}
                value={"Bath"}
              />
              <label className="form-check-label" htmlFor="bathCheck">
                Bath
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Nail Trim"
                id="nailTrimCheck"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setInputs({ ...inputs, serviceTwo: event.target.checked });
                  setErrors(
                    validate({ ...inputs, serviceTwo: event.target.checked })
                  );
                }}
              />
              <label className="form-check-label" htmlFor="nailTrimCheck">
                Nail Trim
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Deshedding Treatment"
                id="deshedCheck"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setInputs({ ...inputs, serviceThree: event.target.checked });
                  setErrors(
                    validate({ ...inputs, serviceThree: event.target.checked })
                  );
                }}
              />

              <label className="form-check-label" htmlFor="deshedCheck">
                Deshedding Treatment
              </label>
              {errors.serviceOne ? (
                <Alert warning={errors.serviceOne}></Alert>
              ) : null}
            </div>
          </div>
        </fieldset>
        <div style={{ padding: "10px" }}>
          <Button content="Submit" onClick={handleSubmit}></Button>

          {showApptPage && (
            <ApptSetPage
              date={inputs.date}
              time={inputs.time}
              firstName={inputs.firstName}
              lastName={inputs.lastName}
              petName={inputs.petName}
              petBreed={inputs.petBreed}
              serviceOneBool={inputs.serviceOne}
              serviceOne={"Bath"}
              serviceTwoBool={inputs.serviceTwo}
              serviceTwo={"Nail Trim"}
              serviceThreeBool={inputs.serviceThree}
              serviceThree={"Deshedding Treatment"}
              email={inputs.email}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Appts;
