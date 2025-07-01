import workData from '@/src/data/workData'

import { AccordionUsage } from './accordion'

type Props = {
    company: string
}

export function Work ( {company}: Props ) {
    const work = workData.filter( e => e.company === company)[0]

    return (
        <AccordionUsage work={work} />
    )
}