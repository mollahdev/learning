/**
 * @topic The clean code foundation
 * 
 * easy to understand
 * easy to read
 * easy to maintain
 */
/**
 * EXAMPLE 1 
 */
const freePermissions = {
    withdrow: true,
    app: false,
    transfer: false,
}

const paidPermissions = {
    withdrow: true,
    app: true,
    transfer: true,
}

const factory = (name, id, permissions) => {
    return {
        name,
        id,
        permissions
    }
}

const create = (param1, param2) => {
    if (param1 < 15) {
        return factory(param1, `${param1}-${param2}`, freePermissions)
    }

    return factory(param1, `${param1}-${param2}`, paidPermissions)
}

console.log(create('Jhone', 100))
console.log(create('Max', 200))

/**
 * EXAMPLE 2
 */
const MyButton = (props) => {
    const { type, onClick, disabled, label } = props
    return type === 'primary' ? <button type={type} onClick={onClick} disabled={disabled}>{label}</button> : type === 'secondary' ? <button type={type} onClick={onClick} disabled={disabled}>{label}</button> : type === 'danger' ? <button type={type} onClick={onClick} disabled={disabled}>{label}</button> : <button type={type} onClick={onClick} disabled={disabled}>{label}</button>
}

/**
 * EXAMPLE 3
 */

const MyInput = (props) => {
    const { fieldType, onValueChange, disabled, fieldValue, placeholder } = props

    return (
        <input
            type={fieldType}
            onChange={onValueChange}
            disabled={disabled}
            value={fieldValue}
            placeholder={placeholder}
        />
    )
}
