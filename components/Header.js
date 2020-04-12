import Nav from '../components/Nav'

const Header = () => {

    return (
        <div className="bg-gray-200">
            <h1>
                <img src="/logo.png" alt="Bem vindo" className='h-24 mx-auto py-4'/> 
            </h1>
            <Nav/>
        </div>	
    );


}


export default Header;