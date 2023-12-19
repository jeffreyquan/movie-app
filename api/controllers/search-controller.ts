import asyncHandler from "express-async-handler";
import { search } from "../services/search-service";

exports.searchResults = asyncHandler(async (req, res, next) => {
  const results = await search(req.query.query as string);
  res.send(results);
});
