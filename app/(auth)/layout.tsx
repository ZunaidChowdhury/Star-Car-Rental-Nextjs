const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex-center min-h-screen w-full bg-primary-50 ">
            {children}
        </div>
    )
}

export default layout