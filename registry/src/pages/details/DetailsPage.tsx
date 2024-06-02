import {useLoaderData} from "react-router-dom";
import {DetailsLoaderResult} from "./detailsLoader.ts";
import {Fragment} from "react";
import Markdown from "react-markdown";
import ExpandablePanel from "../../components/ExpandablePanel.tsx";

export default function DetailsPage() {
    const { details } = useLoaderData() as DetailsLoaderResult;

    const renderMaintainers = details.maintainers.map((maintainer) => {
        return (
            <Fragment key={maintainer.name}>
                {maintainer.name}{maintainer?.email ? <a className="text-blue-500" href={`mailto:${maintainer.email}`}> - {maintainer.email}</a> : ''}
            </Fragment>
        )
    })

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold my-4">
                {details.name}
            </h1>

            <div>
                <h3 className="text-lg font}">
                    Description
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {details.description}
                </div>
            </div>

            <div>
                <h3 className="text-lg font}">
                    License
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {details.license}
                </div>
            </div>

            <div>
                <h3 className="text-lg font}">
                    Author
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {details.author?.name}{details.author?.email ? <a className="text-blue-500"
                                                                      href={`mailto:${details.author.email}`}> - {details.author.email}</a> : ''}
                </div>
            </div>

            <div>
                <h3 className="text-lg font}">
                    Maintainers
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {renderMaintainers}
                </div>
            </div>

            <div>
                <ExpandablePanel header={details.readmeFilename}>
                    <Markdown>{details.readme}</Markdown>
                </ExpandablePanel>
            </div>
        </div>
    );
}