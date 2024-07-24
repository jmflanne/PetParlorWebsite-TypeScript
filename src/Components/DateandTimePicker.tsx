//HTML date and time picker
interface Props {
  timeValue: string;
  timeOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  timeOnBlur: () => void;
  dateValue: string;
  dateOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dateOnBlur: () => void;
}
function DateandTimePicker({
  timeValue,
  timeOnChange,
  timeOnBlur,
  dateValue,
  dateOnChange,
  dateOnBlur,
}: Props) {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <label htmlFor="datePicker">Appointment Date: </label>
        <input
          type="date"
          name="datePicker"
          id="apptDate"
          value={dateValue}
          onChange={dateOnChange}
          onBlur={dateOnBlur}
        ></input>
        <label htmlFor="timePicker">Appointment Time: </label>
        <input
          type="time"
          name="timePicker"
          id="apptTime"
          min="09:00"
          max="19:00"
          step="3600"
          value={timeValue}
          onChange={timeOnChange}
          onBlur={timeOnBlur}
        ></input>
      </div>
    </>
  );
}

export default DateandTimePicker;
