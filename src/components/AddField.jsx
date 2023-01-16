const AddField = ({ text, handleText, handleSubmit, descr, handleDescr }) => {
  return (
    <label className="form" htmlFor="">
      <input
        className="add-input"
        value={text}
        onChange={(e) => handleText(e.target.value)}
        placeholder="Title todo"
      />
      <textarea
        value={descr}
        onChange={(e) => handleDescr(e.target.value)}
        placeholder="Description todo"
        required
      ></textarea>
      <button className="btn" onClick={handleSubmit}>
        Add Todo
      </button>
    </label>
  );
};

export default AddField;
