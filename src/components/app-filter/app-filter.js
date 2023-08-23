
import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees',},
        {name: 'rise', label: 'Еmployees for promotion',},
        {name: 'moreThan1000', label: 'Salary more than 2000$',}
    ];
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;

        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={(params) => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;