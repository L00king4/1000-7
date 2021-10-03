export const AddTrainingMenu = () => {
  return (
    <div>
      <p>Fields with * MUST be filled!</p>
      <div>
        Name*: <input type="text" />
      </div>
      <div>
        Costs*: <input type="number" />
      </div>
      <div>
        Date*: <input type="datetime-local" />
      </div>
      <div>
        Description: <textarea />
      </div>
      <button>Add Competition</button>
    </div>
  );
};
