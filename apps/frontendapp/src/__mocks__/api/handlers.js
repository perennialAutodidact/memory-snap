import { mockPhotos } from "@memory-snap/common/__mocks__";
import { http, HttpResponse } from "msw";

export const fetchPhotos_success = http.get(
  `${import.meta.env.VITE_API_URL}/photos`,
  () => {
    // return HttpResponse(ctx.status(200), ctx.json({ photos: mockPhotos }));
    return HttpResponse.json({ photos: mockPhotos }, { status: 200 });
  },
);

export const fetchPhotos_fail_400 = http.get(
  `${import.meta.env.VITE_API_URL}/photos`,
  (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({ error: { message: "failed to fetch photos" } }),
    );
  },
);

export const fetchPhotos_fail_500 = http.get(
  `${import.meta.env.VITE_API_URL}/photos`,
  (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: { message: "failed to fetch photos" } }),
    );
  },
);

export const handlers = [
  fetchPhotos_success,
  fetchPhotos_fail_400,
  fetchPhotos_fail_500,
];
