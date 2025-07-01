import Link from 'next/link'

type Props = {
    link: string
}

export function ReadMoreLink ( {link}: Props) {
 return (
    <div className="border-1 border-[#bb7483] mx-8 text-[#bb7483] bg-[rgb(220,199,195)] transform hover:scale-110"><Link href={link}>Read more</Link></div>
 )
}