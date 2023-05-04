const Layout = ({children}) => {
    return (
        <>
            <div className="container">
                <section style={{minHeight: '250px'}}>
                    {children}
                </section>
            </div>
        </>
    )
}
export default Layout;