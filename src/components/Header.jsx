const Header = () => {
    return (
        <header className="bg-gray-800 text-gray-100 p-4">
            <div className="container mx-auto flex flex-wrap items-center">
                <span className="uppercase font-medium flex-1">
                    Communication
                </span>
                <div className="flex flex-1 gap-2 items-center">
                    <span>Choisissez votre équipe</span>
                    <div className="flex gap-2">
                        <div className="bg-red-500 w-8 h-8 rounded-full"></div>
                        <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;