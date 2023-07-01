import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Cards = ({ singleClass }) => {
  const {
    id,
    img,
    name,
    title,
    description,
    duration,
    fee,
    instructor,
    availableSeats,
  } = singleClass;
  return (
    <div>
      <Card className="flex-row w-full h-60 max-w-[48rem] shadow-lg">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img src={img} alt="image" className="w-full h-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="#1E1E1E" className="mb-2">
            {title}
          </Typography>
          <div className="flex gap-10">
            <Typography variant="h6" color="blue" className=" mb-4">
              Duration: {duration}
            </Typography>
            <Typography variant="h6" color="red" className="uppercase mb-4">
              {fee}
            </Typography>
          </div>
          <Typography  color="black" className=" mb-4">
          Instructor name: {instructor}
            </Typography>
          <Typography color="gray" className="font-normal mb-8">
            {description}
          </Typography>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
