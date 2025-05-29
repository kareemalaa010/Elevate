export default function LoginForm (){
    return(
        <>
        <input type="text" placeholder="Username" className="username"/>
        <input type="password" placeholder="Password" className="password"/>
        <button className="login-button">Login</button>
        </>
    );
}