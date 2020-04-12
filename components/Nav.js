import Link from 'next/link'

const NavLink = ({src, title}) =>{
    return (
        <Link href={src} >
            <a className='p-2 hover:underline hover:text-red-800'> {title} </a>
        </Link>
    );
}

const Nav = () => {

    return (

        <div className='bg-gray-500 py-4 text:center'>
            <NavLink src='/sobre' title='Sobre'/>
            <NavLink src='/cadastro' title='Cadastre-Se'/>
            <NavLink src='/entrar' title='Entrar'/>
        </div>

    );

}


export default Nav;