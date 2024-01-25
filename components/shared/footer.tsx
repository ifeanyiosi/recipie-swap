import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { footLink } from "@/constants";

export default function Footer() {
  return (
    <div className="bg-[#d9cdad]  w-full">
      <div className="wrapper flex flex-col lg:flex-row">
        {footLink?.map((item) => (
          <Accordion
            key={item.name}
            type="single"
            collapsible
            className="w-full text-[#000]  gap-4 grid lg:grid-cols-3"
          >
            <AccordionItem
              className="border-b border-[#000]/30 lg:border-none"
              value="item-1"
            >
              <AccordionTrigger className="uppercase text-[1rem] whitespace-nowrap">
                {" "}
                {item.name}{" "}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col  gap-2">
                  {item?.links?.map((link: any) => (
                    <li
                      className="flex flex-col  gap-4 w-full"
                      key={link.linkName}
                    >
                      <a href={link.href} className="text-[#000]  w-full ">
                        {link.linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
