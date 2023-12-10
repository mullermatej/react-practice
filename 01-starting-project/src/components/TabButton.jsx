export default function TabButton({ children, onSelect }) {
    // function handleClick() {
    //     console.log('HELLO');
    // }

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}
