import { cn } from "lib/util"
import { Link, NavLink } from "react-router"
import { sidebarItems } from "~/constants"

const NavItems = ({handleClick}:{handleClick? : () => void}) => {
    const user = {
        name: 'Marcelo',
        email: 'contact@mmdeveloper.pro',
        imageUrl: '/assets/images/david.webp',
    }

    return (
        <section className="nav-items">
            <Link to={'/'} className="link-logo">
                <img src="/assets/icons/logo.svg" alt="Logo" className="size-[30px]" />
                <h1>Tourvisto</h1>
            </Link>
            <div className="container">
                <nav>
                    {sidebarItems.map(({ id, icon, label, href }) => (
                        <NavLink to={href} key={id}>
                            {({ isActive }: { isActive: boolean }) => (
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white': isActive
                                })} onClick={handleClick}>
                                    <img src={icon} alt={label} className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`} />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>
                <footer className="nav-footer">
                    <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || 'David'} />
                    <article>
                        <h2>{user?.name || 'David'}</h2>
                        <p>{user?.email || 'contact@mmdeveloper.pro'}</p>
                    </article>
                    <button onClick={()=>{console.log('logout')}} className="cursor-pointer">
                       <img src="/assets/icons/logout.svg" alt="logout" className="size-6" /> 
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default NavItems