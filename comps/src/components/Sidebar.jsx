import Link from "./Link";

export default function Sidebar() {
    const links = [
        {
            label: 'Dropdown',
            path: '/'
        },
        {
            label: 'Accordion',
            path: '/accordion'
        },
        {
            label: 'Buttons',
            path: '/buttons'
        },
        {
            label: 'Modal',
            path: '/modal'
        },
        {
            label: 'Table',
            path: '/table'
        },
        {
            label: 'Counter',
            path: '/counter'
        },
    ]

    const renderedLinks = links.map(item => {
        return (
            <Link
                key={item.label}
                to={item.path}
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2">
                    {item.label}
            </Link>
        )
    })

    return (
        <div className="sticky top-o overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}