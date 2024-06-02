import Accordion from "../components/Accordion";

export default function AccordionPage() {
    const items = [
        {
            id: 'dsfgsgr',
            label: 'Can I use React',
            content: 'You can use React on any project you want.'
        },
        {
            id: 'dsfsfgtefdsgfvxcvgsgr',
            label: 'Can I use JS',
            content: 'You can use JS on any project you want.'
        },
        {
            id: 'dsfvcxbcnjhygtfdcgsgr',
            label: 'Can I use CSS',
            content: 'You can use CSS on any project you want.'
        },
    ]

    return (
        <Accordion items={items}/>
    );
}