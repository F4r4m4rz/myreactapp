"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Input(props) {
    return (<div style={{ justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
            <div style={{ width: '100px', textAlign: 'left', display: '' }}>
                <label>{props.title}</label>
            </div>
            <div>
                <input type={props.type} onChange={event => props.onChange(event.target.value)}/>
            </div>
        </div>);
}
function NewExpenseFrom(props) {
    const onTitleChange = (newValue) => {
        props.state.title = newValue;
    };
    const onAmountChange = (newValue) => {
        props.state.amount = newValue;
    };
    const onDescChange = (newValue) => {
        props.state.desc = newValue;
    };
    return (<form onSubmit={props.onAction}>
            <Input title="Title" type="text" value={props.state.title} onChange={onTitleChange}/>
            <Input title="Amount" type="number" value={props.state.amount} onChange={onAmountChange}/>
            <Input title="Description" type="text" value={props.state.desc} onChange={onDescChange}/>
            <button style={{ margin: '1rem' }}>Submit</button>
        </form>);
}
exports.default = NewExpenseFrom;
