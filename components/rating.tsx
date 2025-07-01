"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

type Props = {
  rating: number | undefined;
};

export function BasicRating({ rating }: Props) {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={rating} readOnly />
    </Box>
  );
}
