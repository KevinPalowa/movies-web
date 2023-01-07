import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { Fragment } from "react";

export default function Tabs({ data }) {
  console.log(data);
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-5 border-b border-gray-600">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={classNames({
                "hover: border-b border-green-500 text-green-500": selected,
              })}
            >
              Cast
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={classNames({
                "hover: border-b border-green-500 text-green-500": selected,
              })}
            >
              Genres
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="mt-3 flex w-full flex-wrap">
          {data.credits.cast.map((cast: { id: number; name: string }) => (
            <Link key={cast.id} href={`/cast/${cast.id}`}>
              <a className="my-0.5 mr-1 mb-0.5 block items-center whitespace-nowrap  bg-gray-800 p-1 text-xs">
                {cast.name}
              </a>
            </Link>
          ))}
        </Tab.Panel>
        <Tab.Panel className="mt-3 flex w-full flex-wrap">
          {data.genres.map((genre: { id: number; name: string }) => (
            <Link key={genre.id} href={`/genre/${genre.id}`}>
              <a className="my-0.5 mr-1 block items-center whitespace-nowrap  bg-gray-800 p-1 text-xs">
                {genre.name}
              </a>
            </Link>
          ))}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
