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

const permissionFactory = (name, id, permissions) => {
    return {
        name,
        id,
        permissions
    }
}

const createUserPermission = (param1, param2) => {
    if (param1 < 15) {
        return permissionFactory(param1, `${param1}-${param2}`, freePermissions)
    }

    return permissionFactory(param1, `${param1}-${param2}`, paidPermissions)
}

console.log(createUserPermission('Jhone', 100))
console.log(createUserPermission('Max', 200))

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
    const { type, onValueChange, disabled, fieldValue, placeholder, ...rest } = props

    return (
        <input
            type={type}
            onChange={onValueChange}
            disabled={disabled}
            value={fieldValue}
            placeholder={placeholder}
            {...rest}
        />
    )
}


<>
    <input
        type={ }
    />

    <MyInput
        type={ }
        onChange={ }
    />
</>