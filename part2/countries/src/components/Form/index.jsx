const Form = ({ value, onChange }) => {
    return (
        <form>
            <label htmlFor="country">Search: </label>
            <input type="text" name="country" value={value} onChange={onChange}/>
        </form>
    )
}

export default Form