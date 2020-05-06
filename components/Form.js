const Form = () => {
  return (
    <div>
      <form>
        <label>
          Organisation:
          <input type="text" name="organisation" />
        </label>
        <label>
          Main Area of Work:
          <select>
            <option value="policy-planning">Policy & Planning</option>
            <option value="knowledge-learning">Knowledge & Learning</option>
            <option value="finance-budget">Finance & Budget</option>
            <option value="practice-innovation">Practice & Innovation</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
