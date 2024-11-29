import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const RatingTemp = ({ ratings }) => {
  if (ratings === 5) {
    return (
      <>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
      </>
    );
  } else if (ratings === 4) {
    return (
      <>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
      </>
    );
  } else if (ratings === 3) {
    return (
      <>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
      </>
    );
  } else if (ratings === 2) {
    return (
      <>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
      </>
    );
  } else if (ratings === 1) {
    return (
      <>
        <span className="text-[#Edbb0E]">
          <FaStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
        <span className="text-[#Edbb0E]">
          <CiStar />
        </span>
      </>
    );
  }
};

export default RatingTemp;
