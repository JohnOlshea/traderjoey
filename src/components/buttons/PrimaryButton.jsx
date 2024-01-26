export default function PrimaryButton({ children, onClick, ...props }) {
    return (
        <button onClick={onClick} className="bg-primary text-white rounded-full py-4 px-8" {...props}>
            {children}
        </button>
    )
}