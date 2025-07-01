import Link from 'next/link'

export function Header () {
    return (
        <header className="bg-[rgb(37,17,17)]">
            <div className="flex relative w-[5%] left-[5%] text-[rgb(189,115,115)] py-[0.5%] gap-[30%]">
                <Link className="hover:text-white" href='/'>Home</Link>
                <Link className="hover:text-white" href='/my-recipes'>Recipes</Link>
                <Link className="hover:text-white" href='/schedule'>Schedule</Link>
            </div>
        </header>
    )
}

