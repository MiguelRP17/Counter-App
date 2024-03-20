export default function FirstButton({counter, onClick}){  
    
    return (
        <div>
            <button className="boton" onClick={onClick}>Increase</button>
        </div>
    );
}