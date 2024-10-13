function Form({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const text = formData.get('text');
    if (!text) return;
    onSubmit(text);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>To Do List</h1>
      <input type='text' name='text' placeholder='Add a task...' />
      <button type='submit'>Add Task</button>
    </form>
  );
}
export default Form;
