import { apiSlice } from "./apiSlice.js";
import { ORDER_URL } from "../constants.js";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create order api method
    createOrder: builder.mutation({
      query: (data) => ({
        url: ORDER_URL,
        method: "POST",
        body: data,
      }),
    }),

    // get all orders api method
    getAllOrders: builder.query({
      query: () => ({
        url: ORDER_URL,
        method: "GET",
      }),
      providesTags: ["Order"],
      keepUnusedDataFor: 5,
    }),

    // get order by id api method
    getOrderById: builder.query({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
      }),
    }),

    // mark order as paid api method
    markOrderAsPaid: builder.mutation({
      query: ({ id, data }) => ({
        url: `${ORDER_URL}/${id}/pay`,
        method: "PUT",
        body: data,
      }),
    }),

    // mark order as delivered
    markOrderAsDelivred: builder.mutation({
      query: (id) => ({
        url: `${ORDER_URL}/${id}/deliver`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useMarkOrderAsPaidMutation,
  useMarkOrderAsDelivredMutation,
} = orderApiSlice;
