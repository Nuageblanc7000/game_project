export default function ButtonChoice({text, className, handleclick}) {
    return (
        <button className={className} onClick={handleclick}>
            {text}
        </button>
    )
}