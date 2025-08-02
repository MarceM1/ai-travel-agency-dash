import { Link, Outlet } from "react-router"

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            MobileSidebar
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/all-users'}>AllUsers</Link>
            <aside className="w-full max-w-[270px] hidden lg:bloch">
                Sidebar
                <Link to={'/all-users'}>AllUsers</Link>
                <Link to={'/dashboard'}>Dashboard</Link>
            </aside>
            <aside className="children">
                <Outlet />
            </aside>
        </div>
    )
}

export default AdminLayout