import { useState, useEffect } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const tokens = [
  {
    id: "BUSD",
    name: "BUSD",
    image: "/tokens/BUSD.svg",
  },
  {
    id: "ETH",
    name: "Etherium",
    image: "/tokens/ETH.svg",
  },
  {
    id: "ATOM",
    name: "Cosmos",
    image: "/tokens/ATOM.svg",
  },
  {
    id: "BLUR",
    name: "Blur",
    image: "/tokens/BLUR.svg",
  },
  {
    id: "bNEO",
    name: "NeoBurger",
    image: "/tokens/bNEO.svg",
  },
  
  {
    id: "ZIL",
    name: "Zilliqa",
    image: "/tokens/ZIL.svg",
  },
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TokensList(props) {
  const [selected, setSelected] = useState(tokens.find(t => t.id === props.value));

  const onChange = (token) => {
    setSelected(token);
    props.onChange(token.id);
  }

  return (
    <Listbox value={selected} onChange={onChange} name={props.inputName}>
      {({ open }) => (
        <>
          <Label className="block text-sm font-medium leading-6 text-gray-900">
            {props.label}
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={selected.image}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {tokens.map((token) => (
                  <ListboxOption
                    key={token.id}
                    className={({ focus }) =>
                      classNames(
                        focus ? "bg-indigo-600 text-white" : "",
                        !focus ? "text-gray-900" : "",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={token}
                  >
                    {({ selected, focus }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={token.image}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {token.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              focus ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
