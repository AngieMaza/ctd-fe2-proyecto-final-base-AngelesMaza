import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { server } from "./mocks/server";
import { fetch, Headers, Request, Response } from "cross-fetch";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
global.React = React; 

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;