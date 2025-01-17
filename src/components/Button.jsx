const Button = ({
    children,
    type = 'button',
    className = '',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    ...props}) => {
    return (
        <>
           <button className={`${bgColor} ${textColor} ${className} px-4 py-2 rounded-xl`} {...props}>{children}</button>
        </>
    )
}
export default Button;