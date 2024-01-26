export default function SecondaryButton({ children, onClick, ...props }) {
    return (
        <button onClick={onClick} className="border border-primary text-primary rounded-full py-4 px-8" {...props}>
            {children}
        </button>
    )
}