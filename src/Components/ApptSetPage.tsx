import { useNavigate } from "react-router-dom";

//shows user input retrieved from Appts.tsx
interface Props {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  petName: string;
  petBreed: string;
  serviceOneBool: boolean;
  serviceOne: string;
  serviceTwoBool: boolean;
  serviceTwo: string;
  serviceThreeBool: boolean;
  serviceThree: string;
  email: string;
}

function ApptSetPage({
  date,
  time,
  firstName,
  lastName,
  petName,
  petBreed,
  serviceOneBool,
  serviceOne,
  serviceTwoBool,
  serviceTwo,
  serviceThreeBool,
  serviceThree,
  email,
}: Props) {
  const navigate = useNavigate();
  const tabIndex = -1;
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <button
        className="btn btn-success d-grid gap-2 col-6 mx-auto"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        View Appointment Information
      </button>
      <div className="modal" tabIndex={tabIndex} id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thank you!</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                You have made an appointment on {date} at {time}. It is under
                the name {firstName} {lastName}. It is for {petName} the{" "}
                {petBreed}.
              </p>
              <p>They will be receiving the following services:</p>
              {serviceOneBool ? <p>{serviceOne}</p> : null}
              {serviceTwoBool ? <p>{serviceTwo}</p> : null}
              {serviceThreeBool ? <p>{serviceThree}</p> : null}
              <p>
                We have sent a confirmation email to {email}. If you have any
                questions, please contact us at the addresses listed on our
                contact page.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleClick}
              >
                Go to home page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApptSetPage;
